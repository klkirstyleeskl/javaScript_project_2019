const PubSub = require('../helpers/pub_sub.js');


const LettersGameView = function(container,selection, round){
  this.elements = []
  this.lettersToShow = selection
  this.round = round
  this.container = container
}

LettersGameView.prototype.showLetters = function () {

  const lettersContainer = document.createElement('div');
  lettersContainer.id = "letters";

  this.lettersToShow.forEach( (letter,index) => {
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
  // for (let i = 0; i<2;i++) {
    const formP1 = document.createElement('form');
    formP1.id = `p1-word-submit`;
    const formP2 = document.createElement('form');
    formP2.id = `p2-word-submit`;
    // const label = document.createElement('label');
    // label.for = "word";
    // label.placeholder = "Player 1 submit your word";

    const inputP1 = document.createElement('input');
    inputP1.type = "text";
    inputP1.id = "p1WordInput";
    inputP1.required = true;
    inputP1.placeholder = "Player 1 submit your word";

    const inputP2 = document.createElement('input');
    inputP2.type = "text";
    inputP2.id = "p2WordInput";
    inputP2.required = true;
    inputP2.placeholder = "Player 2 submit your word";


    const inputP1Btn = document.createElement('input');
    inputP1Btn.type = "submit";
    inputP1Btn.id = "p1-word-input-button";
    inputP1Btn.value = "submit";

    const inputP2Btn = document.createElement('input');
    inputP2Btn.type = "submit";
    inputP2Btn.id = "p2-word-input-button";
    inputP2Btn.value = "submit";

    // form.appendChild(label);
    formP1.appendChild(inputP1);
    formP1.appendChild(inputP1Btn);
    wordSubmitContainer.appendChild(formP1);

    formP2.appendChild(inputP2Btn);
    formP2.appendChild(inputP2);
    wordSubmitContainer.appendChild(formP2);

    this.elements.push(formP1);
    this.elements.push(formP2);

    // const jokeContainer = document.querySelector('#joke-container');


    // <!-- <div id="dictionary-corner">
    //   <button type="button" id="joke-button">Press for surprise</button>
    //   <div id="joke-container">
    //   </div></div> -->

    this.container.appendChild(lettersContainer);
    this.container.appendChild(wordSubmitContainer);

// }
  PubSub.subscribe('Joke:joke-loaded', (evt) => {
    const jokeElement = document.createElement('p');
    console.log(evt);
    jokeElement.textContent = evt.detail;
    this.container.appendChild(jokeElement);
  })
};


// Adds an event listener to the word input and publishes the submitted word to
// be checked against the selected letters and words array.
LettersGameView.prototype.setupEventListener = function () {

  // PubSub.subscribe('Letters: generated-selection', (evt) => {

      // const selection = evt.detail
      // this.lettersToShow = evt.detail
      this.showLetters();
      const round = this.round
      let word1;
      let word2;

      this.elements[0].addEventListener('submit', function(event) {
        console.log(event);
        event.preventDefault();
        const form = event.target;
        word1 = event.target.p1WordInput.value;

        form.reset();

      });


      // this.element2.addEventListener('submit', function(event) {

      this.elements[1].addEventListener('submit', function(event) {

        event.preventDefault();
        const form = event.target;
        word2 = event.target.p2WordInput.value;
        PubSub.publish(`LettersGameView:submitted-word-p1-round-${round}`, word1);
        PubSub.publish(`LettersGameView:submitted-word-p2-round-${round}`, word2);

        form.reset();

      });

};



module.exports = LettersGameView;
