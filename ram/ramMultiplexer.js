export function RamMultiplexer() {
  this.data = [];
}

RamMultiplexer.prototype.write = function(binary) {
  this.data.unshift(...binary);
}

RamMultiplexer.prototype.read = function(address) {
  return this.data[address];
}

RamMultiplexer.prototype.clear = function(addressFrom = 0, addressTo = 1) {
  return this.data[address].splice(addressFrom, addressTo);
}
