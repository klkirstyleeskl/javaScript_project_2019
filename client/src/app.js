const WordInputFormView = require('./views/word_input_form_view.js');
const Letters = require('./models/letters.js');

const ShowLettersView = require('./views/show_letters_view.js');
const Words = require('./models/words.js');

const ShuffleLettersButton = require('./models/shuffle_letters_button.js');
const StartButton = require('./models/start_button.js');

const PlayerInputFormView = require('./views/player_input_form_view.js');
const Player = require('./models/player.js');
const PlayerView = require('./views/player_view.js');

const Game = require('./models/game.js')


document.addEventListener('DOMContentLoaded', () => {

  const startButton = new StartButton();
  startButton.startGame();

  const player = new Player();
  player.bindEvents();

  const playerView = new PlayerView();
  playerView.displayPlayer1();
  playerView.displayPlayer2();

  const player1InputForm = document.querySelector('#player1-submit');
  const player2InputForm = document.querySelector('#player2-submit');
  const player1InputFormView = new PlayerInputFormView(player1InputForm);
  const player2InputFormView = new PlayerInputFormView(player2InputForm);
  player1InputFormView.bindEvents();
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



});
