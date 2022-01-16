import { tokenize } from "./tokenizer.js";
import { AST } from "./ast.js";
import { generate } from "./generator.js";
import { transpile } from "../assembler/transpiler.js";

export function compile(programSource) {
  const tokens = tokenize(programSource);
  const ast = new AST(tokens);
  const asmCode = generate(ast.body);
  const machineCode = transpile(asmCode);

  return machineCode;
}
