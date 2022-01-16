import { RamMultiplexer } from "./ramMultiplexer.js";

export function RAM() {
  this.ramMultiplexer = new RamMultiplexer();
}

RAM.prototype.write = function(binary) {
  this.ramMultiplexer.write(binary);
}

RAM.prototype.read = function(address) {
  return this.ramMultiplexer.read(address);
}

RAM.prototype.clear = function(address) {
  this.ramMultiplexer.clear(address);
}
