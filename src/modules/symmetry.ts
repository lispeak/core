import alphabet from "./alphabet";
import { SymmetryPosition } from "../types";

const getSymmetry = (consonant: string) =>
  alphabet.consonants.indexOf(consonant) % 2 === 0
    ? {
        negative: "u",
        neutral: "i",
        positive: "a",
      }
    : {
        negative: "o",
        neutral: "w",
        positive: "e",
      };

const buildSymmetryRoot =
  (position: SymmetryPosition) => (rootConsonants: string) => {
    switch (rootConsonants.length) {
      case 1:
        return `${rootConsonants[0]}${
          getSymmetry(rootConsonants[0])[position]
        }`;
    }
  };

export default {
  negative: buildSymmetryRoot("negative"),
  neutral: buildSymmetryRoot("neutral"),
  positive: buildSymmetryRoot("positive"),
};
