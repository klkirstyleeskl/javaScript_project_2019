const WordInputFormView = require('./views/word_input_form_view.js');
const Letters = require('./models/letters.js');
const ShowLettersView = require('./views/show_letters_view.js');


document.addEventListener('DOMContentLoaded', () => {

  const showLetters = new ShowLettersView();
  showLetters.showLetters();

// Selects the word input form, targets the submitted word and then publishes it.
  const wordInputForm = document.querySelector('#word-submit');
  const wordInputFormView = new WordInputFormView(wordInputForm);
  wordInputFormView.setupEventListener();

});
