const PubSub = require('../helpers/pub_sub.js');

const Numbers = function(){

  this.numbers = this.getNumbers();
  this.target = this.getTarget();
  this.selection = [];
}

Numbers.prototype.getRandomNumbers = function() {

  for (let i = 0;i<6;i++){
    this.selection.push(this.generateNumber());
  }

  return this.selection;
  // PubSub.publish('Numbers: generated-selection', [this.selection,this.target]);
};

Numbers.prototype.getNumbers = function() {
  const numbers = {
    "100":1,
    "75":1,
    "50":1,
    "25":1,
    "10":2,
    "9":2,
    "8":2,
    "7":2,
    "6":2,
    "5":2,
    "4":2,
    "3":2,
    "2":2,
    "1":2
  }
  return numbers
};

Numbers.prototype.getTarget = function(){
  const randomNumber = Math.floor(Math.random()*900)+100;
  return randomNumber;
}

Numbers.prototype.generateNumber = function(){

  let numberCount = 0;
  let numberArray = [];
  for (let number in this.numbers) {
    for (i=0;i<this.numbers[number];i++){
      numberArray.push(number);
    }
  };

  index = Math.floor(Math.random()*numberArray.length)
  number = numberArray[index];
  this.numbers[number] -= 1;
  return number;
}

Numbers.prototype.bindEvents = function(){

}

Numbers.prototype.solveGame = function(solutionStringß){
  
}

module.exports = Numbers;
