import { ALU } from "./alu.js";
import { ControlUnit } from "./controlUnit.js";
import { RegisterMultiplexer } from "./registerMultiplexer.js";
import { StackMultiplexer } from "./stackMultiplexer.js";

export function CPU(ram) {
  this.ramPointer = ram;
  this.alu = new ALU();
  this.registerMultiplexer = new RegisterMultiplexer();
  this.stackMultiplexer = new StackMultiplexer();
  this.controlUnit = new ControlUnit(
      this.alu,
      this.ramPointer,
      this.registerMultiplexer,
      this.stackMultiplexer);
}

CPU.prototype.run = function() {
  this.controlUnit.run();
}