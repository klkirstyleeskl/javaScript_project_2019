const PubSub = require('../helpers/pub_sub.js');


const PlayerInputFormView = function(form) {
  this.form = form;
};


PlayerInputFormView.prototype.bindEvents = function () {
  this.form.addEventListener('submit', (evt) => {
    this.handleSubmit(evt);
  });
};

// Publishes the new player object and resets the player input field.
PlayerInputFormView.prototype.handleSubmit = function (evt) {
  evt.preventDefault();
  const newPlayer = this.createPlayer(evt.target);
  PubSub.publish('PlayerInputFormView:submitted-player', newPlayer);
  evt.target.reset();
};

// Creates a new player from the player input with an initial score of 0.
PlayerInputFormView.prototype.createPlayer = function (form) {
  const player = {
    name: form.name.value,
    score: 0
  };
  return player;
};


module.exports = PlayerInputFormView;
