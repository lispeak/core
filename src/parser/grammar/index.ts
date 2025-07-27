import * as ohm from 'ohm-js';

const grammar = ohm.grammar(`
Lispeak { 
  program = (space* expr space*)* 

  atom = identifier | number
  expr = atom | list
  list =  "(" space? expr (space+ expr)* space? ")"

  identifier = char+
  number = digit+
  char  = letter | digit | "-" | "~" | ">" | "<" 
}
`);

export default grammar;
