|Behavior|Input|Output|
|-|-|-|
|Convert all inputs to lowercase| "BUTT" | "butt" |
<!-- |If input isn't all letters, do nothing to them| "42" | "42" | -->
|For words beginning with a vowel, add "way" to the end.| "about" | "aboutway" |
|For words beginning with one consonants, move the consonant to the end, and add "ay".| "behind" | "ehindbay" |
|For words beginning with multiple consonants, move all of the first consecutive consonants to the end, and add "ay".| "street" | "eetstray" |
|If the first consonants include "qu", move the "u" along with the "q" and put "ay" at the end. | "queen" | "eenquay |
|For words beginning with "y", treat "y" as a consonant.| "year" | "earyay" |
