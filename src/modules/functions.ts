import p from "./primitives";

const many = (x: string) => p.many + x;

const was = (x: string) => p.past + x;
const is = (x: string) => p.now + x;
const will = (x: string) => p.future + x;

export default {
  many,
  was,
  is,
  will,
};
