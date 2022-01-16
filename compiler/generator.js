import { AST_NODE_TYPES, ASSEMBLY, TOKENS_ASSEMBLY_MAP } from "../helpers/constants.js";

export function generate(ast) {
  const assemblyInstructions = [];

  const _generate = (node) => {
    if (!node || !node.right) {
      throw new Error('Unexpected error');
    }

    if (node.right.type === AST_NODE_TYPES.literal) {
      assemblyInstructions.push(
        [ASSEMBLY.loadB, node.left.value],
        [ASSEMBLY.loadA, node.right.value],
        TOKENS_ASSEMBLY_MAP[node.value],
        );
      return;
    }

    _generate(node.right);
    
    assemblyInstructions.push(
      [ASSEMBLY.loadB, node.left.value], 
      TOKENS_ASSEMBLY_MAP[node.value],
    );
  }
  _generate(ast);

  assemblyInstructions.push(ASSEMBLY.halt);

  return assemblyInstructions;
}
