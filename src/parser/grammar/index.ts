import * as ohm from 'ohm-js';

const grammar = ohm.grammar(`
Lispeak { 
  program = expr* 

  atom = identifier | number
  expr = atom | list
  list =  space* "(" space? expr (space+ expr)* space? ")" space*

  identifier = char+
  number = digit+
  char  = letter | digit | "-" | "~" | ">" | "<" 
}
`);

export default grammar;
