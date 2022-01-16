export function RegisterMultiplexer() {
  this.registers = [0, 0];
}

RegisterMultiplexer.prototype.getRegisterA = function() {
  return this.registers[0];
}

RegisterMultiplexer.prototype.getRegisterB = function() {
  return this.registers[1];
}

RegisterMultiplexer.prototype.setRegisterA = function(value) {
  this.registers[0] = value;
}

RegisterMultiplexer.prototype.setRegisterB = function(value) {
  this.registers[1] = value;
}
