const ShowLettersView = require('../views/show_letters_view.js');
const PubSub = require('../helpers/pub_sub.js');

const ShuffleLettersButton = function() {
  this.shuffledLetterString = ""
};

// Handles the click event on the shuffle letters button.
ShuffleLettersButton.prototype.shuffleLetters = function () {
  const shuffleLettersButton = document.querySelector('#shuffle-letters');

  const showLettersView = new ShowLettersView();
  showLettersView.showLetters();
  this.shuffledLetterString = showLettersView.lettersToShow;
  PubSub.publish('ShuffleLettersButton: generated-selection', this.shuffledLetterString);


  shuffleLettersButton.addEventListener('click', function() {
    location.reload();
  })
};


module.exports = ShuffleLettersButton;
