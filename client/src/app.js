const WordInputFormView = require('./views/word_input_form_view.js');
const Letters = require('./models/letters.js');

const ShowLettersView = require('./views/show_letters_view.js');
const Words = require('./models/words.js');

const ShuffleLettersButton = require('./models/shuffle_letters_button.js');
const StartButton = require('./models/start_button.js');

const PlayerInputFormView = require('./views/player_input_form_view.js');
const Player = require('./models/player.js');


document.addEventListener('DOMContentLoaded', () => {

  const player = new Player();
  player.bindEvents();

  const playerInputForm = document.querySelector('#name-submit',)
  const playerInputFormView = new PlayerInputFormView(playerInputForm);
  playerInputFormView.bindEvents();

// Selects the word input form, targets the submitted word and then publishes it.
  const wordInputForm = document.querySelector('#word-submit');
  const wordInputFormView = new WordInputFormView(wordInputForm);
  wordInputFormView.setupEventListener();

  //Generates a new word checker object and listens for the channel relating to when a word is submitted
  const words = new Words();
  words.loadWords();
  words.bindEvents();

  const startButton = new StartButton();
  startButton.startGame();

// Displays new random letters on shuffle letters button click.
  const shuffleLettersButton = new ShuffleLettersButton();
  shuffleLettersButton.shuffleLetters();


});
