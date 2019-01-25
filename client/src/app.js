const WordInputFormView = require('./views/word_input_form_view.js');


document.addEventListener('DOMContentLoaded', () => {

  const letters = document.querySelectorAll('h2');

  const alphabet = ['A','B','C','D','E','F','G','H','I','J','H','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

  letters.forEach((letter) => {
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }

    letter.textContent = alphabet[getRandomInt(26)];
  })

// Selects the word input form, targets the inputted word and publishes.
  const wordInputForm = document.querySelector('#word-submit');
  const wordInputFormView = new WordInputFormView(wordInputForm);
  wordInputFormView.setupEventListener();

});
