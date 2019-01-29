const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');
const Words = require('../models/words.js');


const PlayerView = function() {
  this.request = new RequestHelper('/api/leaderBoard');
};

// Subscribes to the player objects published by Player.js and shows the players
// in the browser. New players always start with a score of 0 regardless of their
// score in the db, we should be able to update that elsewhere with their final
// game score.
PlayerView.prototype.displayPlayers = function () {
  PubSub.subscribe('Player1:player-1', (evt) => {
    this.displayPlayer1Name(evt.detail);
    this.displayPlayer1Score(evt.detail);
  });
  PubSub.subscribe('Player2:player-2', (evt) => {
    this.displayPlayer2Name(evt.detail);
    this.displayPlayer2Score(evt.detail);
  });
  PubSub.subscribe('Player1:new-score', (evt) => {
    const player1Score = document.querySelector('#player1-score');
    player1Score.textContent = evt.detail;
  });
  PubSub.subscribe('Player2:new-score', (evt) => {
    const player2Score = document.querySelector('#player2-score');
    player2Score.textContent = evt.detail;
  });
};

PlayerView.prototype.displayPlayer1Name = function (evt) {
  const player1Name = document.querySelector('#player1-name');
  player1Name.textContent = evt.name;
};

PlayerView.prototype.displayPlayer1Score = function (evt) {
  const player1Score = document.querySelector('#player1-score');
  player1Score.textContent = evt.score;
};

PlayerView.prototype.displayPlayer2Name = function (evt) {
  const player2Name = document.querySelector('#player2-name');
  player2Name.textContent = evt.name;
};

PlayerView.prototype.displayPlayer2Score = function (evt) {
  const player2Score = document.querySelector('#player2-score');
  player2Score.textContent = evt.score;
};


module.exports = PlayerView;
