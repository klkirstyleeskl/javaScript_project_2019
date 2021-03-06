const PubSub = require('../helpers/pub_sub.js');


const WordInputFormView = function(wordInputElement) {
  this.element = wordInputElement;
};

// Adds an event listener to the word input and publishes the submitted word to
// be checked against the selected letters and words array.
WordInputFormView.prototype.setupEventListener = function () {

  PubSub.subscribe('ShuffleLettersButton: generated-selection', (evt) => {

      const selection = evt.detail
      this.element.addEventListener('submit', function(event) {

        event.preventDefault();
        const form = event.target;
        const word = event.target.word.value;
        PubSub.publish('WordInputFormView:submitted-word', word);
        PubSub.publish('WordInputFormView:submitted-word-and-selection', [word, selection]);

        form.reset();
      });
    });
};


module.exports = WordInputFormView;
