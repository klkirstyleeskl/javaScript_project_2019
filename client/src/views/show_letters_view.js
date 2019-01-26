const PubSub = require('../helpers/pub_sub.js');
const Letters = require('../models/letters.js');


const ShowLettersView = function() {
  this.lettersToShow = ""
};


// Takes in the random letters from the Letters model and displays them in the
// letters divs.
ShowLettersView.prototype.showLetters = function () {
  const letters = new Letters();
  const lettersToShow = letters.getRandomLetters();
  this.lettersToShow = lettersToShow.join('');
  const letterElements = document.querySelectorAll('h2');
  letterElements.forEach((letterElement) => {
    letterElement.textContent = lettersToShow.pop();
  });
  PubSub.publish('ShowLettersView:lettersToShow', this.lettersToShow);

};


module.exports = ShowLettersView;
