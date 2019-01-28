const PubSub = require('../helpers/pub_sub.js');
const Letters = require('../models/letters.js');

const LettersGameView = function(wordInputElement1,wordInputElement2, selection, round){
  this.element1 = wordInputElement1
  this.element2 = wordInputElement2
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
      let word1;
      let word2;

      this.element1.addEventListener('submit', function(event) {

        event.preventDefault();
        const form = event.target;
        word1 = event.target.word.value;

        form.reset();

      });

      this.element2.addEventListener('submit', function(event) {
        event.preventDefault();
        const form = event.target;
        word2 = event.target.word.value;
        PubSub.publish(`LettersGameView:submitted-word-p1-round-${round}`, word1);
        PubSub.publish(`LettersGameView:submitted-word-p2-round-${round}`, word2);

        form.reset();

      });



    // });




// };

// LettersGameView.prototype.removeEventListener = function () {
//
//   // PubSub.subscribe('Letters: generated-selection', (evt) => {
//
//       // const selection = evt.detail
//       // this.lettersToShow = evt.detail
//       this.showLetters();
//       const round = this.round
//       let word1;
//       let word2;
//
//       this.element1.addEventListener('submit', function(event) {
//
//         event.preventDefault();
//         const form = event.target;
//         word1 = event.target.word.value;
//         form.reset();
//
//       });
//
//       this.element2.addEventListener('submit', function(event) {
//         console.log("registering submit event listener");
//         event.preventDefault();
//         const form = event.target;
//         word2 = event.target.word.value;
//
//         PubSub.publish('LettersGameView:submitted-word-p1', word1);
//         PubSub.publish('LettersGameView:submitted-word-p2', word2);
//
//         form.reset();
//
//       });



    // });


};



module.exports = LettersGameView;
