import grammar from '../grammar';

const semantics = grammar.createSemantics().addOperation('ast', {
    _iter(...children) {
        return children.map((c) => c.ast());
    },
    _terminal() {
        return this.sourceString;
    },

    atom(e) {
        return e.ast();
    },
    char(chars) {
        return this.sourceString;
    },
    number(chars) {
        return this.sourceString.includes('.') ? parseFloat(this.sourceString) : parseInt(this.sourceString, 10);
    },
    program(expressions) {
        return expressions.ast();
    },
    expr(e) {
        return e.ast();
    },
    list(a, b, c, d, e, f, g, h, i) {
        const mappedD = d.ast();
        const mappedF = f.children.map((c) => c.ast());

        const unwrapSingleValues = (expr: any) => (Array.isArray(expr) && expr.length === 1 ? expr[0] : expr);
        return [mappedD, ...mappedF].map(unwrapSingleValues);
    },
});

export default semantics;
