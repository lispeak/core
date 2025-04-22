import roots from "./modules/roots";
import symmetry from "./modules/symmetry";

const yes = symmetry.positive(roots.truth.consonants);
const no = symmetry.negative(roots.truth.consonants);

const truee = yes;
const falsee = no;

const I = symmetry.positive(roots.i.consonants);
const you = symmetry.negative(roots.i.consonants);

console.log({ yes, no });
console.log({ truee, falsee });
console.log({ I, you });
