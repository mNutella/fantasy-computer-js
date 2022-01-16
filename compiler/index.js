import { tokenize } from "./tokenizer.js";
import { AST } from "./ast.js";
import { generate } from "./generator.js";
import { compile as asmCompiler } from "../assembler/index.js";

export function compile(programSource) {
  const tokens = tokenize(programSource);
  const ast = new AST(tokens);
  const asmCode = generate(ast.body);
  const machineCode = asmCompiler(asmCode);

  return machineCode;
}
