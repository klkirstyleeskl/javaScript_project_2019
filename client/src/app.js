const WordInputFormView = require('./views/word_input_form_view.js');
const Letters = require('./models/letters.js');
const ShuffleLettersButton = require('./models/shuffle_letters_button.js');
const StartButton = require('./models/start_button.js');


document.addEventListener('DOMContentLoaded', () => {


// Selects the word input form, targets the submitted word and then publishes it.
  const wordInputForm = document.querySelector('#word-submit');
  const wordInputFormView = new WordInputFormView(wordInputForm);
  wordInputFormView.setupEventListener();

  const startButton = new StartButton();
  startButton.startGame();

// Displays new random letters on shuffle letters button click.
  const shuffleLettersButton = new ShuffleLettersButton();
  shuffleLettersButton.shuffleLetters();

});
