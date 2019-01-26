const PubSub = require('../helpers/pub_sub.js')
const RequestHelper = require('../helpers/request_helper.js');


const Player = function(name, score) {
  this.name = name;
  this.score = score;
  this.request = new RequestHelper('/api/leaderBoard');
};


Player.prototype.bindEvents = function () {
  PubSub.subscribe('PlayerInputFormView:submitted-player', (evt) => {
    console.dir(evt.detail);
    this.addPlayer(evt.detail);
  })
};

Player.prototype.addPlayer = function (newPlayer) {
  this.request
    .post(newPlayer)
    .catch((err) => console.error(err));
};


module.exports = Player;
