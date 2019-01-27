const PubSub = require('../helpers/pub_sub.js');


const Player2InputFormView = function(form) {
  this.form = form;
};


Player2InputFormView.prototype.bindEvents = function () {
  this.form.addEventListener('submit', (evt) => {
    this.handleSubmit(evt);
  });
};

// Publishes the new player name from the player1 input form and resets the
// player1 input field.
Player2InputFormView.prototype.handleSubmit = function (evt) {
  evt.preventDefault();
  PubSub.publish('Player2InputFormView:submitted-player', evt);
  evt.target.reset();
};


module.exports = Player2InputFormView;
