const PubSub = require('../helpers/pub_sub.js');


const PlayerView = function() {

};


PlayerView.prototype.displayPlayer1 = function () {
  const player1Submit = document.querySelector('#player1-submit');
  const player1View = document.querySelector('#player1');
  player1Submit.addEventListener('submit', (evt) => {
    player1View.textContent = evt.target.name.value;
  })
};

PlayerView.prototype.displayPlayer2 = function () {
  const player2Submit = document.querySelector('#player2-submit');
  const player2View = document.querySelector('#player2');
  player2Submit.addEventListener('submit', (evt) => {
    player2View.textContent = evt.target.name.value;
  })
};


module.exports = PlayerView;
