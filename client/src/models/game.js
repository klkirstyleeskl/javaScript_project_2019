const PubSub = require('../helpers/pub_sub.js');
const LettersGameView = require('../views/letters_game_view');
const Letters = require('./letters.js');
const Words = require('./words.js')
const PlayerView = require('../views/player_view.js');

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
  let wordInputForm1
  let wordInputForm2
  let inputDiv;
  // const startButton = document.querySelector('#start-button');
  // startButton.addEventListener('click', function() {

  const button = document.querySelector('#start-button');
  button.addEventListener('click', function(event) {

      if (rounds[round] === "L") {
        const selection = letters.getRandomLetters();
        words.selection = selection.join('');
        words.round = round;

        words.bindEvents();

        inputDiv = document.querySelector('#word-submit');
        inputDiv.innerHTML = ' ';
        inputDiv.innerHTML = `
        <form id="p1-word-submit">
          <label for="word">Submit your word</label>
          <input type="text" id="word" required>
          <input type="submit" value="save">
        </form>
        <form id="p2-word-submit">
          <label for="word">Submit your word</label>
          <input type="text" id="word" required>
          <input type="submit" value="save">
        </form>`;

        //Generate the letters game view
        wordInputForm1 = document.querySelector("#p1-word-submit");
        wordInputForm2 = document.querySelector("#p2-word-submit");
        lettersGameView = new LettersGameView(wordInputForm1,wordInputForm2,selection,round);
        lettersGameView.setupEventListener();

      };
      round +=1;
      // inputDiv = document.querySelector('#word-submit');
      // wordInputForm1.removeEventListener('submit', function(event) {
      //
      //   event.preventDefault();
      //   const form = event.target;
      //   word1 = event.target.word.value;
      //   form.reset();
      //
      // });
      // wordInputForm2.removeEventListener('submit', function(event) {
      //   console.log("registering submit event listener");
      //   event.preventDefault();
      //   const form = event.target;
      //   word2 = event.target.word.value;
      //
      //   PubSub.publish('LettersGameView:submitted-word-p1', word1);
      //   PubSub.publish('LettersGameView:submitted-word-p2', word2);
      //
      //   form.reset();
      //
      // });
    });
  };

//Need a closing view for once a game is finished;
//At the moment the game just stops and does nothing;

module.exports = Game;
