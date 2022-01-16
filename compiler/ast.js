import { AST_NODE_TYPES, TOKEN_TYPES } from "../helpers/constants.js";

function NodeLiteral(value) {
  this.type = AST_NODE_TYPES.literal;
  this.value = value;
}

function NodeOperation(value, left = null, right = null) {
  this.type = AST_NODE_TYPES.operation;
  this.value = value;
  this.left = left;
  this.right = right;
}

export function AST(tokens) {
  this.type = AST_NODE_TYPES.program;
  this.body = this.parser(tokens);
}

AST.prototype.parser = function(tokens) {
  let rootNode = null;
  let currOprNode = null;
  let currLtrNode = null;

  for (let i = 0; i < tokens.length; i++) {
    const tokenType = tokens[i].type;
    const tokenLexeme = tokens[i].lexeme;

    // Syntax Checking
    assertUnknownToken(tokens[i]);
    assertIncorrectOrder(tokens[i], tokens[i+1]);

    // Node Creating
    if (tokenType === TOKEN_TYPES.keyword) {
      const newNode = new NodeOperation(tokenLexeme, currLtrNode);

      !rootNode && (rootNode = newNode);

      if (currOprNode) {
        currOprNode.right = newNode;
      }

      currOprNode = newNode;
    } else {
      const newNode = new NodeLiteral(tokenLexeme, currLtrNode);
      currLtrNode = newNode;
    }
  }

  currOprNode.right = currLtrNode

  return rootNode;
}

// Syntax Rules
function assertUnknownToken(token) {
  if (token.type === TOKEN_TYPES.unknown) {
    throw new Error(`Syntax Error: unknown token '${token.lexeme}'`);
  }
}

function assertIncorrectOrder(currToken, nextToken) {
  if (currToken.type === TOKEN_TYPES.literal && nextToken?.type === TOKEN_TYPES.literal ||
      currToken.type === TOKEN_TYPES.keyword && nextToken?.type === TOKEN_TYPES.keyword) {
    throw new Error('Syntax Error: wrong syntax');
  }
}
