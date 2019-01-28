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
  for (let i = 0; i<2;i++) {
    const form = document.createElement('form');
    form.id = `p${i+1}-word-submit`;
    const label = document.createElement('label');
    label.for = "word";
    label.textContent = "Submit your word";

    const input1 = document.createElement('input');
    input1.type = "text";
    input1.id = "word";
    input1.required=true;

    const input2 = document.createElement('input');
    input2.type = "submit";
    input2.value = "save";

    form.appendChild(label);
    form.appendChild(input1);
    form.appendChild(input2);
    wordSubmitContainer.appendChild(form);

    this.elements.push(form);

    this.container.appendChild(lettersContainer);
    this.container.appendChild(wordSubmitContainer);
  }

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

        event.preventDefault();
        const form = event.target;
        word1 = event.target.word.value;

        form.reset();

      });

      this.elements[1].addEventListener('submit', function(event) {
        console.log("registering submit event listener");
        event.preventDefault();
        const form = event.target;
        word2 = event.target.word.value;
        PubSub.publish(`LettersGameView:submitted-word-p1-round-${round}`, word1);
        PubSub.publish(`LettersGameView:submitted-word-p2-round-${round}`, word2);

        form.reset();

      });

};



module.exports = LettersGameView;
