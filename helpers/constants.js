export const TOKEN_TYPES = {
  keyword: 'keyword',
  literal: 'literal',
  unknown: 'unknown'
}

export const TOKENS = {
  sum: TOKEN_TYPES.keyword,
  sub: TOKEN_TYPES.keyword,
  mul: TOKEN_TYPES.keyword,
  div: TOKEN_TYPES.keyword
};

export const AST_NODE_TYPES = {
  operation: 'operation',
  literal: 'literal',
  program: 'program'
};

export const ASSEMBLY = {
  loadA: 'LOAD_A',
  loadB: 'LOAD_B',
  sum: 'SUM',
  sub: 'SUB',
  mul: 'MUL',
  div: 'DIV',
  save: 'SAVE',
  halt: 'HALT'
}

export const MNEMONICS = {
  [ASSEMBLY.halt]: '0000',
  [ASSEMBLY.loadA]: '0001',
  [ASSEMBLY.loadB]: '0002',
  [ASSEMBLY.sum]: '0003',
  [ASSEMBLY.sub]: '0004',
  [ASSEMBLY.mul]: '0005',
  [ASSEMBLY.div]: '0006',
  [ASSEMBLY.save]: '0007'
}

export const TOKENS_ASSEMBLY_MAP = {
  sum: ASSEMBLY.sum,
  sub: ASSEMBLY.sub,
  mul: ASSEMBLY.mul,
  div: ASSEMBLY.div
}

export const CONTROL_UNIT_PHASES = {
  fetching: 'fetching',
  decoding: 'decoding',
  executing: 'executing',
  idle: 'idle'
}

export const CPU_REGISTER_OPCODES = {
  '0001': [ASSEMBLY.loadA],
  '0002': [ASSEMBLY.loadB]
}

export const ALU_OPCODES = {
  '0003': [ASSEMBLY.sum],
  '0004': [ASSEMBLY.sub],
  '0005': [ASSEMBLY.mul],
  '0006': [ASSEMBLY.div]
}
