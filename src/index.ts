import * as ohm from 'ohm-js';

const grammar = ohm.grammar(`
Lispeak { 
  program = (space* expr space*)* 

  expr = char+ | number | list
  list =  "(" space? expr (space+ expr)* space? ")"

  number = digit+
  char  = letter | digit | "-" | "~" | ">" | "<" 
}
`);

const source = `
(a b (c d) e)
(b c d)
(1 2 3) (4 5 6)
`;

const matchResult = grammar.match(source);
console.log(matchResult.succeeded());
console.log(matchResult.message);
