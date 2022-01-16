export function StackMultiplexer() {
  this.registers = [0];
}

StackMultiplexer.prototype.getInstructionAddressRegister = function(i = 0) {
  return this.registers[i];
}

StackMultiplexer.prototype.increaseInstructionAddressRegister = function(i = 0) {
  this.registers[i]++;
}

StackMultiplexer.prototype.resetInstructionAddressRegister = function(i = 0) {
  this.registers[i] = 0;
}