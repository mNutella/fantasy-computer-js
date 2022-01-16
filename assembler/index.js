import { MNEMONICS } from "../helpers/constants.js";
import { dec2bin } from "../helpers/functions.js";

export function compile(assembly) {
  return assembly.map(item => {
    if (Array.isArray(item)) {
      return MNEMONICS[item[0]] + dec2bin(item[1]);
    } else {
      return MNEMONICS[item];
    }
  });
}
