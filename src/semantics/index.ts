import grammar from '../grammar';

const semantics = grammar.createSemantics().addOperation('ast', {
    _iter(...children) {
        return children.map((c) => c.ast());
    },
    atom(e) {
        return e.ast();
    },
    char(chars) {
        return this.sourceString;
    },
    number(chars) {
        return parseInt(this.sourceString, 10) as any;
    },
    program(expressions) {
        return expressions.ast();
    },
    expr(e) {
        return e.ast();
    },
    list(a, b, c, d, e, f, g, h, i) {
        return '';
    },
});

export default semantics;
