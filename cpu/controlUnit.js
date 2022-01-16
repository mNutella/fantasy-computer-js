import {
  ALU_OPCODES, 
  ASSEMBLY, 
  CONTROL_UNIT_PHASES, 
  MNEMONICS, 
  REGISTER_OPCODES 
} from "../helpers/constants.js";
import { clock } from "./clock.js";

export function ControlUnit(alu, ram, registerMultiplexer, stackMultiplexer) {
  this.stage = CONTROL_UNIT_PHASES.idle;

  this.accumulator = 0;
  this.tempRegister = 0;
  this.instructionRegister = 0;

  this.aluPointer = alu;
  this.ramPointer = ram;
  this.registersPointer = registerMultiplexer;
  this.stackPointer = stackMultiplexer;
  
  this.currentClock = null;
}

ControlUnit.prototype.run = function(clockSpeed = 1000) {
  this.currentClock = clock(() => {
    this.setStage(CONTROL_UNIT_PHASES.fetching);
    const currentInstructionAddress = this.stackPointer.getInstructionAddressRegister()
    this.instructionRegister = this.ramPointer.read(currentInstructionAddress);
    this.stackPointer.increaseInstructionAddressRegister();

    const { opcode, data } = this.decode(this.instructionRegister);

    if (opcode === MNEMONICS[ASSEMBLY.halt]) {
      this.reset();
    }

    if (opcode in REGISTER_OPCODES) {
      this.setStage(CONTROL_UNIT_PHASES.executing);

      if (opcode === MNEMONICS[ASSEMBLY.loadA]) {
        this.registersPointer.setRegisterA(data);
      } else {
        this.registersPointer.setRegisterB(data);
      }
    } else if (opcode in ALU_OPCODES) {
      const registerA = this.registersPointer.getRegisterA();
      const registerB = this.registersPointer.getRegisterB();
      const aluResult = this.aluCompute(opcode, registerB, registerA);

      this.registersPointer.setRegisterA(aluResult);
      this.aluPointer.resetFlags();
    }
  }, clockSpeed);
}

ControlUnit.prototype.aluCompute = function(opcode, inputA, inputB) {
  this.setStage(CONTROL_UNIT_PHASES.executing);
  return this.aluPointer.compute(opcode, inputA, inputB);
}

ControlUnit.prototype.decode = function(binaryData) {
  this.setStage(CONTROL_UNIT_PHASES.decoding);

  return { 
    opcode: binaryData.slice(0, 4), 
    data: binaryData.slice(4, binaryData.length)
  };
}

ControlUnit.prototype.setStage = function(stage) {
  this.stage = stage;
}

ControlUnit.prototype.reset = function() {
  this.stackPointer.resetInstructionAddressRegister();
  // TODO: output
  console.log(this.registersPointer.getRegisterA(), parseInt(this.registersPointer.getRegisterA(), 2));
  clearInterval(this.currentClock);
}
