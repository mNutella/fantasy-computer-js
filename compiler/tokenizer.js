import { TOKEN_TYPES, TOKENS } from "../helpers/constants.js";
import { isLiteral } from "../helpers/functions.js";

export function tokenize(charsStream) {
  const rawLexemes = charsStream.trim().split(' ');

  return rawLexemes.reduce((acc, lexeme) => {
    if (!lexeme) return acc;
    let type;

    if (!TOKENS[lexeme] && !isLiteral(lexeme))
      type = TOKEN_TYPES.unknown;
    else if (isLiteral(lexeme))
      type = TOKEN_TYPES.literal;
    else
      type = TOKEN_TYPES.keyword;

    return [
      ...acc,
      {
        lexeme,
        type
      }
  ]}, []);
}
