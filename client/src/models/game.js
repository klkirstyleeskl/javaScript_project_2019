const PubSub = require('../helpers/pub_sub.js');
const LettersGameView = require('../views/letters_game_view');
const Letters = require('./letters.js');
const Words = require('./words.js')

const Game = function(container) {
  // this.container =
}

Game.prototype.playCountdown = function(){

  let round = 0;
  //Generates a new word checker object and listens for the channel relating to when a word is submitted
  const words = new Words();
  words.loadWords();

  const letters = new Letters();
  const rounds = ["L","L","L","L"];
  let lettersGameView;
  // const startButton = document.querySelector('#start-button');
  // startButton.addEventListener('click', function() {



  const button = document.querySelector('#start-button');
  button.addEventListener('click', function(event) {

      if (rounds[round] === "L") {

        const selection = letters.getRandomLetters();
        words.selection = selection.join('');
        words.round = round;

        words.bindEvents();

        //Generate the letters game view
        const wordInputForm = document.querySelector("#word-submit");
        lettersGameView = new LettersGameView(wordInputForm,selection,round);
        lettersGameView.setupEventListener();
      };
      round +=1;
      lettersGameView = null;



    });
  };

//Need a closing view for once a game is finished;
//At the moment the game just stops and does nothing;

module.exports = Game;
