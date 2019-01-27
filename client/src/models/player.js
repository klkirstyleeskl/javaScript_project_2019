const PubSub = require('../helpers/pub_sub.js')
const RequestHelper = require('../helpers/request_helper.js');


const Player = function(name, score) {
  this.name = name;
  this.score = score;
  this.request = new RequestHelper('/api/leaderBoard');
};


Player.prototype.bindEvents = function () {
  PubSub.subscribe('PlayerInputFormView:submitted-player', (evt) => {
    this.addPlayer(evt.detail);
  })
};

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
