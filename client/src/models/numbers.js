const PubSub = require('../helpers/pub_sub.js');

const Numbers = function(){

  this.numbers = this.getNumbers();
  this.target = this.getTarget();
  this.selection = [];
  this.players = [];
  this.playerScores = [0,0];
  this.round = 0;
}

Numbers.prototype.bindEvents = function(){

  PubSub.subscribe(`NumbersGameView:submitted-solution-p1-${this.round}`,(event)=>{
    console.log("HERE - player 1");
    let validity = this.checkSolution(event.detail);
    console.log(validity);
  })

  PubSub.subscribe(`NumbersGameView:submitted-solution-p2-${this.round}`,(event)=>{
    console.log("HERE - player 2");
    let validity = this.checkSolution(event.detail);
    console.log(validity);
    this.scoreGame();
    PubSub.publish('Words:word1-score',this.playerScores[0]);
    PubSub.publish('Words:word2-score',this.playerScores[1]);
  })

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


Numbers.prototype.checkSolution = function(solutionString){

  let validRoutine = true;
  let initialCheck;
  try {
    initialCheck = eval(solutionString)

  } catch(err) {
    initialCheck = false
  }
  if (initialCheck) {

    let numbersArray = solutionString.match(/\d+/g).map(String);
    numbersArray = numbersArray.sort(function(a, b){return b-a});
    let numbersOrdered = this.selection.slice(0)
    numbersOrdered = numbersOrdered.sort(function(a, b){return b-a});

    numbersArray.forEach( (number) => {

      if (numbersOrdered.indexOf(number) <0){
        validRoutine = false;
      }
      numbersOrdered.splice(numbersOrdered.indexOf(number),1)
    });

  } else {
    this.players.push(0);
    return false
  }

  if (!validRoutine) {
    this.players.push(0);
    return false
  } else {
    this.players.push(initialCheck);
    return true
  }
}

Numbers.prototype.scoreGame = function(){
    const player1distance = Math.abs(this.target-this.players[0]);
    const player2distance = Math.abs(this.target-this.players[1]);

    //If player 1 has beat player two then player 2's score should be set equal to 0
    if (player1distance < player2distance){
      this.playerScores[1] = 0;
      if (player1distance===0){
        this.playerScores[0] = 10;
      }
      else if (player1distance<=5){
        this.playerScores[0] = 7;
      }
      else if (player1distance<=5) {
        this.playerScores[0] = 5;
      }
      else {
        this.playerScores[0] = 0;
      }
    } else if (player1distance > player2distance){
      this.playerScores[0] = 0;
      if (player2distance===0){
        this.playerScores[1] = 10;
      }
      else if (player2distance<=5){
        this.playerScores[1] = 7;
      }
      else if (player2distance<=5) {
        this.playerScores[1] = 5;
      }
      else {
        this.playerScores[1] = 0;
      }
    } else {
        if (player1distance===0){
          this.playerScores[0] = 10;
          this.playerScores[1] = 10;
        }
        else if (player1distance<=5){
          this.playerScores[0] = 7;
          this.playerScores[1] = 7;
        }
        else if (player1distance<=10){
          this.playerScores[0] = 5;
          this.playerScores[1] = 5;
        }
        else {
          this.playerScores[0] = 0;
          this.playerScores[1] = 0;
        }
    }

  }


module.exports = Numbers;
