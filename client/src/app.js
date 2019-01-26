const WordInputFormView = require('./views/word_input_form_view.js');
const Letters = require('./models/letters.js');

const ShowLettersView = require('./views/show_letters_view.js');
const Words = require('./models/words.js');

const ShuffleLettersButton = require('./models/shuffle_letters_button.js');
const StartButton = require('./models/start_button.js');


document.addEventListener('DOMContentLoaded', () => {

  const startButton = new StartButton();
  startButton.startGame();

  //Creates a new input form and and sends the results to the word checkers
  const wordInputForm = document.querySelector('#word-submit');
  const wordInputFormView = new WordInputFormView(wordInputForm);
  wordInputFormView.setupEventListener();

  // Displays new random letters on shuffle letters button click.
  const shuffleLettersButton = new ShuffleLettersButton();
  shuffleLettersButton.shuffleLetters();

  //Generates a new word checker object and listens for the channel relating to when a word is submitted
  const words = new Words();
  words.loadWords();
  words.bindEvents();

});
