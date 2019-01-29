const WordInputFormView = require('./views/word_input_form_view.js');
const Letters = require('./models/letters.js');

const ShowLettersView = require('./views/show_letters_view.js');
const Words = require('./models/words.js');

const ShuffleLettersButton = require('./models/shuffle_letters_button.js');
const StartButton = require('./models/start_button.js');

const Player1InputFormView = require('./views/player1_input_form_view.js');
const Player2InputFormView = require('./views/player2_input_form_view.js');
const Player1 = require('./models/player1.js');
const Player2 = require('./models/player2.js');
const PlayerView = require('./views/player_view.js');

const Joke = require('./models/joke.js');
const JokeView = require('./views/joke_view.js');
const JokeButton = require('.//models/joke_button.js');


const Game = require('./models/game.js')


document.addEventListener('DOMContentLoaded', () => {

  const startButton = new StartButton();
  startButton.startGame();

  const playerView = new PlayerView();
  playerView.displayPlayers();

  const joke = new Joke();
  joke.getData();

  const player1 = new Player1();
  player1.bindEvents();
  const player2 = new Player2();
  player2.bindEvents();

  const player1InputForm = document.querySelector('#player1-submit');
  const player1InputFormView = new Player1InputFormView(player1InputForm);
  player1InputFormView.bindEvents();
  const player2InputForm = document.querySelector('#player2-submit');
  const player2InputFormView = new Player2InputFormView(player2InputForm);
  player2InputFormView.bindEvents();

  const jokeContainer = document.querySelector('#joke-container');
  const jokeView = new JokeView(jokeContainer);
  jokeView.bindEvents();


  const game = new Game();
  game.playCountdown();

});
