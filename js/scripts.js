var vowels = ["a", "e", "i", "o", "u"]

$(document).ready(function() {
  $("form#words").submit(function(event) {
    event.preventDefault();
    var word = $("input#word").val().toLowerCase();

// This if statement checks if the first leter of the input is a vowel.
    if (vowels.includes(word[0])) {
      word = word + "way";
    } else {
      // word is redefined as Word + the First Letter at the end.
      word += word[0]
      word = word.slice(1)
      word = word + "ay";
    }

    $(".piglatin").append(word)
  });
});
