# Lispeak

Lispeak is a project to create a constructed language inspired by:
- [Lambda-calculus](https://en.wikipedia.org/wiki/Lambda_calculus)
- [Lisp](https://en.wikipedia.org/wiki/Lisp)
- [Lojban](https://en.wikipedia.org/wiki/Lojban)
- [Group theory](https://en.wikipedia.org/wiki/Group_theory)

## Manifesto

The main goal of this project is to create a language with the following parameters:

- Language specification should be written in TypeScript
- Language specification and development should be completely git-based
  
- Language morphology should have based on symmetries like in group theory
- Language syntax should have structure based on S-expressions like in Lisp
- Language should be compatible with any natural language (you can use words from your language inside of Lispeak sentences)
- Language should sound well 


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
| y      | Voiced palatal approximant     | may / (fr.) Paul | й/ь                |
| z      | Voiced alveolar sibilant       | ooze             | з                  |

### Derivative vowels

With help of the `y` consonant we can create derivative vowels: 

| Symbol | Description                       | Example Word | Russian Equivalent |
|--------|---------------------------------- |--------------|--------------------|
| ya      | Open vowel                       |  yard        | я                  |
| yo      | Back mid vowel                   |  yoga        | ё                  |
| ye      | Front mid vowel                  |  yes         | е                  |
| yu      | Back close vowel                 |  use         | ю                  |

### Special signs 

| Symbol | Description                                | Example Word | Russian Equivalent |
|--------|--------------------------------------------|--------------|--------------------|
| '      | stop or a pause in the middle of the word  |              | ъ                  |

## Morphology

The basic idea of Lispeak morphology are symmetries.

### Symmetry 1: Binary oppositions

In language there're a lot of words with opposite meanings like left/right, beautiful/ugly, peace/war. In Lispeak these words come from one root in different morphological forms. So many roots have left and right forms like:

| Left      | Right     |
|-----------|-----------|
| left      | right     |
| down      | up        |
| back      | forward   |
| negative  | positive  |
| ugly      | beautiful |
| dark      | light     |
| minus     | plus      |
| from      | to        |
| pull      | push      |
| no        | yes       |
| static    | dynamic   |

The base of every word is root that consists out of consonants only. It can consist of one, two, three or four letters just like in Hebrew.
The first letter of the word is always one of vowels `a`,`e`,`o`,`u`. The default form is right. Adding `y` to the first vowel makes it left.

E.g.: 
```
o  - yes
yo - no
```

### Symmetry 2: Static/dynamic words

Static words mean static objects like "apple" and dynamic words mean some dynamic action like "to walk". It's similar to nouns and verbs.

### Symmetry 3: Main/additional words

Main words mean main sentence parts like nouns and verbs. Additional part from noun is adjective and from verb is participle. 

### Symmetry 4: Perfection/processing

### Symmetry 5: Time

## Syntax

All sentenses in Lispeak are S-expressions in prefix notation just like in Lisp: 

```
(operation operand1 operand2 operand3)
```

Every verb in Lispeak is an operation too.

### Equality

One of the basic language operations is equality that is used for creating named expressions. It's defined with one letter word `o`.

```
o {left} {right}
```

It means `left equals right`
E.g. to say `Alice is a doctor`:

```
o elis doktor
```

So `yo` is the negated `o` meaning `not equals`:

```
yo {left} {right}
```
It means `left not equals right`.

### Recursion

For language recursion (not to be confused with algorithmic recursion) Lispeak uses two particles:  
- Recursion down: word `e`
- Recursion up word `u`

It works similar to parentheses in Lisp.

