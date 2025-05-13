# Lispeak

Lispeak is a project to create a constructed language. It's inspired by:
- [Lisp](https://en.wikipedia.org/wiki/Lisp)
- [Lojban](https://en.wikipedia.org/wiki/Lojban)
- [Group theory](https://en.wikipedia.org/wiki/Group_theory)

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

| Symbol | Description                  | Example Word   | Russian Equivalent |
| ------ | ---------------------------- | -------------- | ------------------ |
| b      | Voiced bilabial stop         | bagel          | б                  |
| c      | Unvoiced coronal sibilant    | shark          | ш                  |
| d      | Voiced dental/alveolar stop  | desk           | д                  |
| f      | Unvoiced labial fricative    | fat            | ф                  |
| g      | Voiced velar stop            | great          | г                  |
| j      | Voiced coronal sibilant      | mea<b>s</b>ure | ж                  |
| k      | Unvoiced velar stop          | kill           | к                  |
| l      | Voiced lateral approximant   | lake           | л                  |
| m      | Voiced bilabial nasal        | maybe          | м                  |
| n      | Voiced dental or velar nasal | neck           | н                  |

### Derivative vowels

With help of the `y` consonant we can create derivative vowels: 

| Symbol | Description                       | Example Word | Russian Equivalent |
|--------|---------------------------------- |--------------|--------------------|
| ya      | Open vowel                       |  yard        | я                  |
| yo      | Back mid vowel                   |   yoga       | ё                  |
| ye      | Front mid vowel                  |  yes         | е                  |
| yu      | Back close vowel                 |  use         | ю                  |


## Morphology

The basic idea of Lispeak is a word symmetry. 

In every language we have a lot of word pairs with opposite meaning
- left/right
- dark/light
- past/future
- greater/less
- stay/move
- beautiful/ugly

In Lispeak all of these pairs are being formed on morphological level.

## Syntax

All sentenses in Lispeak are S-expressions like in Lisp. 

### Recursion

