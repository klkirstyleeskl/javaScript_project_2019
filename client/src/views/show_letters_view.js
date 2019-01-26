const PubSub = require('../helpers/pub_sub.js');
const Letters = require('../models/letters.js');


const ShowLettersView = function() {

};


// Takes in the random letters from the Letters model and displays them in the
// letters div.
ShowLettersView.prototype.showLetters = function () {
  const letters = new Letters();
  const lettersToShow = letters.getRandomLetters();
  const letterElements = document.querySelectorAll('h2');
  letterElements.forEach((letterElement) => {
    letterElement.textContent = lettersToShow.pop();
  });
};


module.exports = ShowLettersView;
