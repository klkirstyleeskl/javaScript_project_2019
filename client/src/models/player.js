const PubSub = require('../helpers/pub_sub.js')
const RequestHelper = require('../helpers/request_helper.js');


const Player = function(name, score) {
  this.name = name;
  this.score = score;
  this.request = new RequestHelper('/api/leaderBoard');
};

// Subscibes to the player1 and player2 input form values, creates new players
// from the values and then publishes the player objects.
Player.prototype.bindEvents = function () {
  PubSub.subscribe('Player1InputFormView:submitted-player', (evt) => {
    const player1 = this.createPlayer1(evt);
    this.addPlayer(player1);
    PubSub.publish('Player:player-1', player1);
  });
  PubSub.subscribe('Player2InputFormView:submitted-player', (evt) => {
    const player2 = this.createPlayer2(evt);
    this.addPlayer(player2);
    PubSub.publish('Player:player-2', player2);
  });
};

// Creates a new player from the player1 name input with an initial score of 0
// but does not add the player to the db.
Player.prototype.createPlayer1 = function (evt) {
  const player1 = {
    name: evt.detail.target.name.value,
    score: 0
  };
  return player1;
};

// Creates a new player from the player2 name input with an initial score of 0
// but does not add the player to the db.
Player.prototype.createPlayer2 = function (evt) {
  const player2 = {
    name: evt.detail.target.name.value,
    score: 0
  };
  return player2;
};

// If the new player is not already in the db then the new player is added to
// the db. If the new player is already in the db then the existing player is
// not overwritten. We can change the console.log() to update a text element
// with the 'That player already exists!' message.
Player.prototype.addPlayer = function (newPlayer) {
  this.request
    .get()
    .then((players) => {
      const names = players.map(player => player.name);
      if (names.includes(newPlayer.name)) {
        console.log('That player already exists!');
      } else {
        this.request
          .post(newPlayer)
          .catch((err) => console.error(err));
      }
    })
    .catch((err) => console.error(err));
};


module.exports = Player;
