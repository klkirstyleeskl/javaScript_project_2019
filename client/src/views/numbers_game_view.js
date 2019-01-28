const PubSub = require('../helpers/pub_sub.js');
const Numbers = require('../models/numbers.js');

const NumbersGameView = function(container, solutionInputElement1,solutionInputElement2, selection, target, round){
  this.container = document.querySelector('#round-anchor');
  this.element1 = document.querySelector("#p1-number-submit");
  this.element2 = document.querySelector("#p2-number-submit");
  this.selection = selection;
  this.target = target;
  this.round = round;
}



NumbersGameView.prototype.showNumbers = function () {

    this.container.innerHTML = '';
    const mainContainer = document.createElement('div');
    const numbersContainer = document.createElement('div');

    //Number tiles to the parent container
    this.selection.forEach( (number) => {
      const numberTile = document.createElement('div');
      numberTile.classList.add('number-tile');
      numberTile.textContent = number;
      numbersContainer.appendChild(numberTile);
    })

    //Add the target to the parent container
    const targetTile = document.createElement('div');
    targetTile.classList.add('target-tile');
    targetTile.textContent = this.target;

    mainContainer.appendChild(numbersContainer);
    mainContainer.appendChild(targetTile);
    this.container.appendChild(mainContainer);
};


// Adds an event listener to the word input and publishes the submitted word to
// be checked against the selected letters and words array.
NumbersGameView.prototype.setupEventListener = function () {

  // PubSub.subscribe('Letters: generated-selection', (evt) => {

      // const selection = evt.detail
      // this.lettersToShow = evt.detail
      this.showLetters();
      const round = this.round;
      let solution1;
      let solution2;

      this.element1.addEventListener('submit', function(event) {

        event.preventDefault();
        const form = event.target;
        solution1 = event.target.word.value;
        form.reset();

      });

      this.element2.addEventListener('submit', function(event) {

        event.preventDefault();
        const form = event.target;
        solution2 = event.target.word.value;

        PubSub.publish(`NumbersGameView:submitted-solution-p1${round}`, solution1);
        PubSub.publish(`NumbersGameView:submitted-solution-p2${round}`, solution2);

        form.reset();

      });



    // });
};

module.exports = NumbersGameView;
