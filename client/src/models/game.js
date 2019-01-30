const PubSub = require('../helpers/pub_sub.js');
const LettersGameView = require('../views/letters_game_view.js');
const NumbersGameView = require('../views/numbers_game_view.js');
const ConundrumGameView = require('../views/conundrum_view.js')
const Letters = require('./letters.js');
const Words = require('./words.js')
const EndGameView = require('../views/end_game_view.js')
// const Conundrum = require('./conundrum.js')
const PlayerView = require('../views/player_view.js');
const Numbers = require('./numbers.js');

const Game = function() {
}

Game.prototype.playCountdown = function(){

  let round = 0;
  //Generates a new word checker object and listens for the channel relating to when a word is submitted
  const words = new Words();
  words.loadWords();

  const letters = new Letters();
  const numbers = new Numbers();
  // const conundrum = new Conundrum();

  const rounds = ["L","E","L","N","L","C"];

  let lettersGameView;
  let conundrumGameView;
  let wordInputForm1
  let wordInputForm2
  let inputDiv;
  // let target = document.querySelector('#target');

  // const startButton = document.querySelector('#start-button');
  // startButton.addEventListener('click', function() {

  const button = document.querySelector('#start-button');
  button.addEventListener('click', function(event) {

      if (rounds[round] === "L") {


        console.log('round loop');

        letters.letters = [];

        const selection = letters.getRandomLetters();
        words.selection = selection.join('');
        words.round = round;

        words.bindEvents();
        const gameContainer = document.querySelector('#game-container');
        const player1Word = document.querySelector('#p1-word-display');
        const player2Word = document.querySelector('#p2-word-display');
        const resultDisplay = document.querySelector('#result-display');
        const bestWordsDisplay = document.querySelector('#best-words');
        gameContainer.innerHTML = '';
        player1Word.innerHTML = '';
        player2Word.innerHTML = '';
        resultDisplay.innerHTML = '';
        bestWordsDisplay.innerHTML = '';
        // if (target) {
        //   target.innerHTML = '';
        // }

        //Generate the letters game view
        lettersGameView = new LettersGameView(gameContainer, selection,round);
        lettersGameView.setupEventListener();

      } else if (rounds[round] === "N") {

        console.log('maths round');
        numbers.selection = [];
        numbers.getRandomNumbers();
        const selection = numbers.selection;
        const target = numbers.target;
        numbers.bindEvents();
        const gameContainer = document.querySelector('#game-container');
        const player1Word = document.querySelector('#p1-word-display');
        const player2Word = document.querySelector('#p2-word-display');
        const resultDisplay = document.querySelector('#result-display');
        const bestWordsDisplay = document.querySelector('#best-words');
        gameContainer.innerHTML = '';
        player1Word.innerHTML = '';
        player2Word.innerHTML = '';
        resultDisplay.innerHTML = '';
        bestWordsDisplay.innerHTML = '';

        numbersGameView = new NumbersGameView(gameContainer, selection, target, round);
        numbersGameView.setupEventListener();
      }

      else if (rounds[round] === "C") {
        //Code for calling End Game View
        words.getConundrum();
        words.bindConundrumEvents();
        const jumble = words.jumble;
        const answer = words.answer;
        console.log(jumble);

        const gameContainer = document.querySelector('#game-container');
        const player1Word = document.querySelector('#p1-word-display');
        const player2Word = document.querySelector('#p2-word-display');
        const resultDisplay = document.querySelector('#result-display');
        const bestWordsDisplay = document.querySelector('#best-words');
        gameContainer.innerHTML = '';
        player1Word.innerHTML = '';
        player2Word.innerHTML = '';
        resultDisplay.innerHTML = '';
        bestWordsDisplay.innerHTML = '';

        conundrumGameView = new ConundrumGameView(gameContainer, jumble, answer);
        conundrumGameView.setupEventListener();
      }

      else {

        //Store the latest player information and pass it into the end view.
        const players = [];
        players.push(document.querySelector('#player1-name').textContent);
        players.push(document.querySelector('#player1-score').textContent);
        players.push(document.querySelector('#player2-name').textContent);
        players.push(document.querySelector('#player2-score').textContent);

        const gameContainer = document.querySelector('body');
        gameContainer.innerHTML = '';

        const endGameView = new EndGameView(gameContainer, players);
        endGameView.setupEventListener();
      }
      round +=1;

    });
  };

module.exports = Game;
