import grammar from './grammar';
import semantics from './semantics';

const parse = (source: string) => {
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

export default parse;
