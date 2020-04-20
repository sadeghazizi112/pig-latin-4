var vowels = ["a", "e", "i", "o", "u"]

$(document).ready(function() {
  $("form#words").submit(function(event) {
    event.preventDefault();
    var word = $("input#word").val().toLowerCase();

    // This if statement checks if the first leter of the input is a vowel.
    if (vowels.includes(word[0])) {
      word = word + "way";
      // Checking to see if the word has more than one consenant
    } else {
      for (var i = 0; i < word.length; i = 0) {
        if (!vowels.includes(word[i])) {
          // word is redefined as Word + the First Letter at the end.
          word += word[0]
          word = word.slice(1)
        } else {
          word = word + "ay";
          break;
        }
      }
    }

    $(".piglatin").append(word)
  });
});
