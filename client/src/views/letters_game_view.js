const PubSub = require('../helpers/pub_sub.js');
const Letters = require('../models/letters.js');

const LettersGameView = function(wordInputElement, selection, round){
  this.element = wordInputElement
  this.lettersToShow = selection
  this.round = round
}

LettersGameView.prototype.showLetters = function () {

    const letterElements = document.querySelectorAll('h2');
    const temp = this.lettersToShow;
    letterElements.forEach((letterElement) => {
      letterElement.textContent = temp.pop();
    });
};


// Adds an event listener to the word input and publishes the submitted word to
// be checked against the selected letters and words array.
LettersGameView.prototype.setupEventListener = function () {

  // PubSub.subscribe('Letters: generated-selection', (evt) => {

      // const selection = evt.detail
      // this.lettersToShow = evt.detail
      this.showLetters();
      const round = this.round

      this.element.addEventListener('submit', function(event) {

        event.preventDefault();
        const form = event.target;
        const word = event.target.word.value;


        PubSub.publish(`WordInputFormView:submitted-word${round}`, word);

      });


    // });


};

module.exports = LettersGameView;
