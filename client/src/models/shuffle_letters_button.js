const ShowLettersView = require('../views/show_letters_view.js');


const SuffleLettersButton = function() {

};


// Handles the click event on the shuffle letters button.
SuffleLettersButton.prototype.shuffleLetters = function () {
  const shuffleLettersButton = document.querySelector('#shuffle-letters');
  shuffleLettersButton.addEventListener('click', function() {
    const showLettersView = new ShowLettersView();
    showLettersView.showLetters();
  })
};


module.exports = SuffleLettersButton;
