const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');

const Joke = function (){
  this.word = null;
  this.text = null;
  this.round = null;
}

Joke.prototype.getData = function () {
  const request = new RequestHelper(`https://icanhazdadjoke.com/search?term=${this.word}`);
  request.get()
    .then((data) => {
      this.text = data.results[0].joke;
      PubSub.publish(`Joke:joke-loaded-${this.round}`, this.text);
          console.log(this.text)
      })
};

module.exports = Joke;
