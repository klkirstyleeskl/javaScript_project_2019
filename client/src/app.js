const WordInputFormView = require('./views/word_input_form_view.js');
const Letters = require('./models/letters.js');

const ShowLettersView = require('./views/show_letters_view.js');
const Words = require('./models/words.js');

const ShuffleLettersButton = require('./models/shuffle_letters_button.js');
const StartButton = require('./models/start_button.js');

const Player1InputFormView = require('./views/player1_input_form_view.js');
const Player2InputFormView = require('./views/player2_input_form_view.js');
const Player = require('./models/player.js');
const PlayerView = require('./views/player_view.js');

const Joke = require('./models/joke.js');


const Game = require('./models/game.js')


document.addEventListener('DOMContentLoaded', () => {

  const startButton = new StartButton();
  startButton.startGame();

  const playerView = new PlayerView();
  playerView.displayPlayers();

  const player = new Player();
  player.bindEvents();

  const player1InputForm = document.querySelector('#player1-submit');
  const player1InputFormView = new Player1InputFormView(player1InputForm);
  player1InputFormView.bindEvents();
  const player2InputForm = document.querySelector('#player2-submit');
  const player2InputFormView = new Player2InputFormView(player2InputForm);
  player2InputFormView.bindEvents();


  const game = new Game();
  game.playCountdown();


  //Creates a new input form and and sends the results to the word checkers
  // const wordInputForm = document.querySelector('#game-container');
  // const wordInputFormView = new WordInputFormView(wordInputForm);
  // wordInputFormView.setupEventListener();
  //
  // // Displays new random letters on shuffle letters button click.
  // const shuffleLettersButton = new ShuffleLettersButton();
  // shuffleLettersButton.shuffleLetters();



  // // Creates a new input form and and sends the results to the word checkers
  // const wordInputForm = document.querySelector('#word-submit');
  // const wordInputFormView = new WordInputFormView(wordInputForm);
  // wordInputFormView.setupEventListener();
  //
  // // Displays new random letters on shuffle letters button click.
  // const shuffleLettersButton = new ShuffleLettersButton();
  // shuffleLettersButton.shuffleLetters();
  //
  // // Generates a new word checker object and listens for the channel relating to when a word is submitted
  // const words = new Words();
  // words.loadWords();
  // words.bindEvents();


});
