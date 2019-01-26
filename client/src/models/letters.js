const PubSub = require('../helpers/pub_sub.js');


const Letters = function() {
  this.letters = [];
  this.vowels = this.getVowels();
  this.consonants = this.getConsonants();
};


// Returns an array of 9 random letters.
Letters.prototype.getRandomLetters = function() {
  // const alphabet = ['A','B','C','D','E','F','G','H','I','J','H','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

  //Array to determine which letter type (consonant or vowel) should be randomly chosen
  //Later on the letter type will be determined by button clicks rather than the array
  //but the rest of the code should otherwise be mostly the same;
  const letterTypes = ["C","V","C","V","C","V","C","V","C"];
  letterTypes.forEach( (letterType) => {
    if (letterType === "C"){
      this.letters.push(this.generateConsonant());
    } else {
      this.letters.push(this.generateVowel());
    }
  });

  // for ( i = 0; i < 9; i++) {
  //   function getRandomInt() {
  //     return Math.floor(Math.random() * 26);
  //   };
  //   this.letters.push(alphabet[getRandomInt()]);
  // };
  // console.log(this.letters);
  return this.letters;
};

Letters.prototype.getVowels = function() {
  const vowels = {
    "A":9,
    "E":12,
    "I":9,
    "O":8,
    "U":4
  }
  return vowels
};

Letters.prototype.getConsonants = function() {
  const consonants = {
    "B":2,
    "C":2,
    "D":4,
    "F":2,
    "G":3,
    "H":2,
    "J":1,
    "K":1,
    "L":4,
    "M":2,
    "N":6,
    "P":2,
    "Q":1,
    "R":6,
    "S":4,
    "T":6,
    "V":2,
    "W":2,
    "X":1,
    "Y":2,
    "Z":1
}
  return consonants;
};

Letters.prototype.generateVowel = function(){
  let vowelCount = 0;
  let vowelArray = [];
  for (let vowel in this.vowels) {
    for (i=0;i<this.vowels[vowel];i++){
      vowelArray.push(vowel);
    }
  };

  index = Math.floor(Math.random()*vowelArray.length)
  letter = vowelArray[index];
  this.vowels[letter] -= 1;
  return letter;
};

Letters.prototype.generateConsonant = function(){
  let consonantCount = 0;
  let consonantArray = [];
  for (let consonant in this.consonants) {
    for (i=0;i<this.consonants[consonant];i++){
      consonantArray.push(consonant);
    }
  };

  index = Math.floor(Math.random()*consonantArray.length);
  letter = consonantArray[index];
  this.consonants[letter] -= 1;
  return letter;
};


module.exports = Letters;
