const JokeView = require('../views/joke_view.js');

const JokeButton = function () {

};

JokeButton.prototype.viewJoke = function () {
const button = document.querySelector('#joke-button')
button.addEventListener('click', handleButtonClick)
}

const handleButtonClick = function () {
  const resultParagraph = document.querySelector('#joke-button');
  resultParagraph.textContent = 'Button clicked';
};

const jokeContainer = document.querySelector('#joke-container');
const jokeView = new JokeView(jokeContainer);
jokeView.bindEvents();

module.exports = JokeButton;
