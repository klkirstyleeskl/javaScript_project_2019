const PubSub = require('../helpers/pub_sub.js');


const Player1InputFormView = function(form) {
  this.form = form;
};


Player1InputFormView.prototype.bindEvents = function () {
  this.form.addEventListener('submit', (evt) => {
    this.handleSubmit(evt);
  });
};

// Publishes the new player name from the player1 input form and resets the
// player1 input field.
Player1InputFormView.prototype.handleSubmit = function (evt) {
  evt.preventDefault();
  PubSub.publish('Player1InputFormView:submitted-player', evt);
  evt.target.reset();
};


module.exports = Player1InputFormView;
