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

const source = `(a b c)`;
const run = () => {
    const matchResult = grammar.match(source);
    if (!matchResult.succeeded()) {
        console.log('Failed to match');
        console.log(matchResult.message);
        return;
    }
    console.log('Successfully matched');

    // try {
    //     const ast = semantics(matchResult).ast();
    //     console.log('Successfully parsed');
    //     console.log(ast);
    // } catch (error) {
    //     console.log('Failed to parse');
    //     console.log(error);
    // }
};
run();
