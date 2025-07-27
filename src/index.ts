import grammar from './grammar';
import semantics from './semantics';

const parse = (source: string) => {
    const matchResult = grammar.match(source);
    if (!matchResult.succeeded()) throw new Error(matchResult.message);

    return semantics(matchResult).ast();
};

export default parse;
