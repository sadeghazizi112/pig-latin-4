var vowels = ["a", "e", "i", "o", "u"]

$(document).ready(function() {
  $("form#words").submit(function(event) {
    event.preventDefault();
    var word = $("input#word").val().toLowerCase();

// This if statement checks if the first leter of the input is a vowel.
    if (vowels.includes(word[0])) {
      word = word + "way";
    }

    $(".piglatin").append(word)
  });
});
