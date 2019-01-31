const PubSub = require('../helpers/pub_sub.js');

const NumbersGameView = function(container,selection, target, round){
  this.container = container;
  this.elements = [];
  this.selection = selection;
  this.target = target;
  this.round = round;
}

NumbersGameView.prototype.showNumbers = function () {

    this.container.innerHTML = '';
    const mainContainer = document.createElement('div');
    mainContainer.setAttribute('id', 'main-numbers-container');
    const numbersContainer = document.createElement('div');
    numbersContainer.setAttribute('id', 'numbers-container');

    //Number tiles to the parent container
    console.log(this.selection);
    this.selection.forEach( (number, index) => {
      const numberTile = document.createElement('div');
      numberTile.classList.add('numbers');
      numberTile.id = `number${index+1}`;

      const numberFormat = document.createElement('h2');
      numberFormat.textContent = number;
      numberTile.appendChild(numberFormat);
      numbersContainer.appendChild(numberTile);
    });
    mainContainer.appendChild(numbersContainer);

    //Add the target to the parent container
    const mainWrapper = document.querySelector('#best-words');
    const targetTile = document.createElement('h4');
    // targetTile.classList.add('target-tile');
    targetTile.textContent = this.target;

    mainWrapper.appendChild(targetTile);


    const numberSubmitContainer = document.createElement('div');
    numberSubmitContainer.id = "number-submit";
    // for (let i = 0; i<2;i++) {
      const formP1 = document.createElement('form');
      formP1.id = `p1-number-submit`;
      const formP2 = document.createElement('form');
      formP2.id = `p2-number-submit`;
      // const label = document.createElement('label');
      // label.for = "word";
      // label.placeholder = "Player 1 submit your word";

      const inputP1 = document.createElement('input');
      inputP1.type = "text";
      inputP1.id = "p1NumberInput";
      inputP1.required = true;
      inputP1.placeholder = "Player 1 submit your calculation";

      const inputP2 = document.createElement('input');
      inputP2.type = "text";
      inputP2.id = "p2NumberInput";
      inputP2.required = true;
      inputP2.placeholder = "Player 2 submit your calculation";


      const inputP1Btn = document.createElement('input');
      inputP1Btn.type = "submit";
      inputP1Btn.id = "p1-number-input-button";
      inputP1Btn.value = "submit";

      const inputP2Btn = document.createElement('input');
      inputP2Btn.type = "submit";
      inputP2Btn.id = "p2-number-input-button";
      inputP2Btn.value = "submit";

      // form.appendChild(label);
      formP1.appendChild(inputP1);
      formP1.appendChild(inputP1Btn);
      numberSubmitContainer.appendChild(formP1);

      formP2.appendChild(inputP2Btn);
      formP2.appendChild(inputP2);
      numberSubmitContainer.appendChild(formP2);

      this.elements.push(formP1);
      this.elements.push(formP2);
      this.container.appendChild(mainContainer);
      this.container.appendChild(numberSubmitContainer);


};


// Adds an event listener to the word input and publishes the submitted word to
// be checked against the selected letters and words array.
NumbersGameView.prototype.setupEventListener = function () {

      this.showNumbers();
      const round = this.round;
      let solution1;
      let solution2;
      let p1NumberSubmit = document.querySelector('#p1-number-submit');
      let p2NumberSubmit = document.querySelector('#p2-number-submit');

      this.elements[0].addEventListener('submit', function(event) {

        event.preventDefault();
        const form = event.target;
        solution1 = event.target.p1NumberInput.value;
        form.reset();

        p1NumberSubmit.innerHTML = '';

      });

      this.elements[1].addEventListener('submit', function(event) {

        event.preventDefault();
        const form = event.target;
        solution2 = event.target.p2NumberInput.value;

        console.log(solution1);
        PubSub.publish(`NumbersGameView:submitted-solution-p1-${round}`, solution1);
        PubSub.publish(`NumbersGameView:submitted-solution-p2-${round}`, solution2);

        form.reset();

        p2NumberSubmit.innerHTML = '';
      });

};

module.exports = NumbersGameView;
