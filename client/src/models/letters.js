const PubSub = require('../helpers/pub_sub.js');


const Letters = function() {
  this.letters = [];
}


// Returns an array of 9 random letters.
Letters.prototype.getRandomLetters = function () {
  const alphabet = ['A','B','C','D','E','F','G','H','I','J','H','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  for ( i = 0; i < 9; i++) {
    function getRandomInt() {
      return Math.floor(Math.random() * 26);
    };
    this.letters.push(alphabet[getRandomInt()]);
  };
  console.log(this.letters);
  return this.letters;
};


module.exports = Letters;
