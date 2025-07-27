import * as ohm from 'ohm-js';

const grammar = ohm.grammar(`
Lispeak { 
  program = expr* 

  expr = atom | list
  list =  space* "(" space* expr (space* expr)* space* ")" space*

  atom = char+
  char  = letter | digit | "-" | "~" | ">" | "<" 
}
`);

export default grammar;
