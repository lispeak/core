import symmetry from "./symmetry";
import roots from "./roots";

const I = "ya";
const you = "yu";

const yes = symmetry.positive(roots.truth.consonants);
const no = symmetry.negative(roots.truth.consonants);

const many = symmetry.positive(roots.many.consonants);
const single = symmetry.negative(roots.many.consonants);

const past = symmetry.negative(roots.time.consonants);
const now = symmetry.neutral(roots.time.consonants);
const future = symmetry.positive(roots.time.consonants);

export default {
  I,
  you,
  yes,
  no,
  many,
  single,
  past,
  now,
  future,
};
