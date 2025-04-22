const symmetryVowels = {
  negative: "u",
  neutral: "i",
  positive: "a",
};

const buildSymmetryRoot =
  (symmetryVowel: string) => (rootConsonants: string) => {
    switch (rootConsonants.length) {
      case 1:
        return `${rootConsonants[0]}${symmetryVowel}`;
      case 2:
        return `${rootConsonants[0]}${symmetryVowel}${rootConsonants[1]}${symmetryVowel}`;
      case 3:
        return `${rootConsonants[0]}${symmetryVowel}${rootConsonants[1]}${rootConsonants[2]}${symmetryVowel}`;
    }
  };

export default {
  negative: buildSymmetryRoot(symmetryVowels.negative),
  neutral: buildSymmetryRoot(symmetryVowels.neutral),
  positive: buildSymmetryRoot(symmetryVowels.positive),
};
