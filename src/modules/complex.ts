import p from "./primitives";
import f from "./functions";

const we = f.many(p.I);
const you_plural = f.many(p.you);

export default {
  we,
  you_plural,
};
