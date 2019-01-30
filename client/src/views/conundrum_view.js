const PubSub = require('../helpers/pub_sub.js');

const ConundrumGameView = function(container,jumble,answer){
  this.elements = [];
  this.jumble = jumble;
  this.answer = answer;
  this.container = container;
}

ConundrumGameView.prototype.showLetters = function () {

  const lettersContainer = document.createElement('div');
  lettersContainer.id = "letters";

  const jumbleArray = this.jumble.toUpperCase().split('');
  jumbleArray.forEach( (letter,index) => {
    const letterTile = document.createElement('div');
    letterTile.classList.add("letters");
    letterTile.id = `letter${index+1}`;

    const letterFormat = document.createElement('h2');
    letterFormat.textContent = letter;
    letterTile.appendChild(letterFormat);
    lettersContainer.appendChild(letterTile);

  });

  const wordSubmitContainer = document.createElement('div');
  wordSubmitContainer.id = "word-submit";
  const form = document.createElement('form');
  form.id = `p-word-submit`;
  const label = document.createElement('label');
  label.for = "word";
  label.textContent = "Submit your word";

  const input1 = document.createElement('input');
  input1.type = "text";
  input1.id = "word";
  input1.required=true;
  form.appendChild(input1)

  for (let i = 0; i<2;i++) {

    const input = document.createElement('input');
    input.type = "submit";
    input.value = "save";
    input.id = `p${i+1}`
    this.elements.push(input);

    // form.appendChild(input1);
    form.appendChild(input);
  }

  wordSubmitContainer.appendChild(form);

    // const jokeContainer = document.querySelector('#joke-container');


    // <!-- <div id="dictionary-corner">
    //   <button type="button" id="joke-button">Press for surprise</button>
    //   <div id="joke-container">
    //   </div></div> -->

  this.container.appendChild(lettersContainer);
  this.container.appendChild(wordSubmitContainer);

}

// Adds an event listener to the word input and publishes the submitted word to
// be checked against the selected letters and words array.
ConundrumGameView.prototype.setupEventListener = function () {

  // PubSub.subscribe('Letters: generated-selection', (evt) => {

      // const selection = evt.detail
      // this.lettersToShow = evt.detail
      this.showLetters();
      const round = this.round
      let word1;

      this.elements[0].addEventListener('click', function(event) {

        event.preventDefault();
        console.log(event);
        const form = event.target.form;
        console.log(form);
        word1 = form.word.value;
        PubSub.publish(`Conundrum:submitted-word-p1`, word1);

        let p1Button = document.querySelector('#p1')
        p1Button.disabled = true;
      });
      // this.element2.addEventListener('submit', function(event) {

      this.elements[1].addEventListener('click', function(event) {
        console.log('here');
        console.log(event);
        event.preventDefault();
        const form = event.target.form;
        word2 = form.word.value;

        PubSub.publish(`Conundrum:submitted-word-p2`, word2);

        let p2Button = document.querySelector('#p2')
        p2Button.disabled = true;

      });

};

module.exports = ConundrumGameView;
