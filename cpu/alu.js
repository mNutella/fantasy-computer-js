import { ASSEMBLY, MNEMONICS } from "../helpers/constants.js";
const FLAGS_INIT_VALUES = {
  overflow: 0,
  negative: 0,
  zero: 0
};

export function ALU() {
  this.flags = FLAGS_INIT_VALUES;
}

ALU.prototype.compute = function(opcode, inputA, inputB) {
  let result = 0;

  inputA = parseInt(inputA, 2);
  inputB = parseInt(inputB, 2);

  switch(opcode) {
    case MNEMONICS[ASSEMBLY.sum]:
      result = sum(inputA, inputB);
      break;
    case MNEMONICS[ASSEMBLY.sub]:
      result = sub(inputA, inputB);
      break;
    case MNEMONICS[ASSEMBLY.mul]:
      result = mul(inputA, inputB);
      break;
    case MNEMONICS[ASSEMBLY.div]:
      result = div(inputA, inputB);
      break;
    default:
      break;
  }
    
  if (result === 0) {
    this.flags.zero = 1;
  } else if (result < 0) {
    this.flags.negative = 1;
  } else if (result.length > 4) {
    this.flags.overflow = 1;
  }

  return result.toString(2);
}

ALU.prototype.resetFlags = function() {
 this.flags = FLAGS_INIT_VALUES;
}

// Operations
function sum(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}