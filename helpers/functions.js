export function isLiteral(literal) {
  return /\d/.test(literal);
}

export function dec2bin(dec) {
  return Number(dec).toString(2);
}
