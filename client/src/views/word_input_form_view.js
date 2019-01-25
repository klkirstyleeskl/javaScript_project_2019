const PubSub = require('../helpers/pub_sub.js');


const WordInputFormView = function(wordInputElement) {
  this.element = wordInputElement;
};


WordInputFormView.prototype.setupEventListener = function () {
  this.element.addEventListener('submit', function(event) {
    event.preventDefault();
    const form = event.target;
    const word = event.target.word.value;
    PubSub.publish('WordInputFormView:submitted-word', word);
    form.reset();
  });
};


module.exports = WordInputFormView;
