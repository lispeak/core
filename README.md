# Lispeak

Lispeak is a project to create a constructed language inspired by:
- [Lisp](https://en.wikipedia.org/wiki/Lisp)
- [Lojban](https://en.wikipedia.org/wiki/Lojban)
- [Group theory](https://en.wikipedia.org/wiki/Group_theory)

The main goal of this project is to create a language with the following parameters:
- Language spec should be written in TypeScript
- Language spec and development should be completely git-based
- Language should have morphology based on symmetries like in group theory
- Language should have syntax structure based on S-expressions like Lisp and Lojban
- Language should sound well like Italian with all the words ending with vowels 


## Alphabet

Alphabet of Lispeak is mostly taken from Lojban with a few small changes. 

### Vowels

| Symbol | Description                      | Example Word | Russian Equivalent |
|--------|--------------------------------- |-------------|--------------------|
| a      | Open vowel                       | father      | а                  |
| o      | Back mid vowel                   | open        | о                  |
| e      | Front mid vowel                  | bet         | э                  |
| u      | Back close vowel                 | moon        | у                  |
| i      | Front close vowel                | machine     | и                  |

### Consonants

| Symbol | Description                    | Example Word     | Russian Equivalent |
|--------|--------------------------------|------------------|--------------------|
| b      | Voiced bilabial stop           | bagel            | б                  |
| c      | Unvoiced coronal sibilant      | <b>sh</b>ark     | ш                  |
| d      | Voiced dental/alveolar stop    | desk             | д                  |
| f      | Unvoiced labial fricative      | fat              | ф                  |
| g      | Voiced velar stop              | great            | г                  |
| h      | Unvoiced velar fricative       | Ba<b>ch</b>      | х                  |
| j      | Voiced coronal sibilant        | mea<b>s</b>ure   | ж                  |
| k      | Unvoiced velar stop            | kill             | к                  |
| l      | Voiced lateral approximant     | lake             | л                  |
| m      | Voiced bilabial nasal          | maybe            | м                  |
| n      | Voiced dental or velar nasal   | neck             | н                  |
| p      | Unvoiced bilabial stop         | pepper           | п                  |
| r      | Rhotic sound                   | river            | р                  |
| s      | Unvoiced alveolar sibilant     | snake            | с                  |
| t      | Unvoiced dental/alveolar stop  | tarp             | т                  |
| v      | Voiced labial fricative        | vast             | в                  |
| y      | Voiced palatal approximant     | may              | й                  |
| z      | Voiced alveolar sibilant       | ooze             | з                  |

### Derivative vowels

With help of the `y` consonant we can create derivative vowels: 

| Symbol | Description                       | Example Word | Russian Equivalent |
|--------|---------------------------------- |--------------|--------------------|
| ya      | Open vowel                       |  yard        | я                  |
| yo      | Back mid vowel                   |   yoga       | ё                  |
| ye      | Front mid vowel                  |  yes         | е                  |
| yu      | Back close vowel                 |  use         | ю                  |


## Morphology

The basic idea of Lispeak morphology is a word symmetry. In every language we have a lot of word pairs with opposite meaning like left/right, dark/light, past/future, greater/less, stay/move, beautiful/ugly, etc. In Lispeak all of these pairs are being formed on morphological level. The pairs are formed by `a/u` and `e/i` sounds for opposites and `o` for the neutrals.

## Syntax

All sentenses in Lispeak are S-expressions like in Lisp. 

### Recursion

