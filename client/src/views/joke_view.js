const PubSub = require('../helpers/pub_sub.js');

const JokeView = function () {

}

JokeView.prototype.bindEvents = function () {
  PubSub.subscribe('Joke:joke-loaded', (evt) => {
    console.log('subscribed to channel');
    this.render(evt.detail);
  });
}

JokeView.prototype.render = function (joke) {
  const p = document.createElement('p');
  p.textContent = joke;
  return p;
};

module.exports = JokeView;
