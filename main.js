import { compile } from "./compiler/index.js";
import { CPU } from "./cpu/index.js";
import { RAM } from "./ram/index.js";

const program = '3 sub 2 sum 1 sub 1 sum 3 sub 2 sub 1 sum 10 sum 20';
const machineCode = compile(program);
const ram = new RAM();
const cpu = new CPU(ram);
ram.write(machineCode);
cpu.run()
  .then(() => console.log(parseInt(ram.read(0), 2)));
