const Letters = function(){

  this.vowels = this.getVowels();
  this.consonants = this.getConsonants();
}

Letters.prototype.getVowels() = function(){
  const vowels = {
    "A":9,
    "E":12,
    "I":9,
    "O":8,
    "U":4
  }
  return vowels
}

Letters.prototype.getConsonants() = function(){

  const constonants = {
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
}

Letters.prototype.generateVowel = function(){
  var vowelCount = 0;
  var vowelArray = [];
  for (var vowel in this.vowels) {
    for (i=0;i<this.vowels[i];i++;){
      vowelArray.push(vowel);
    }
  }

  index = Math.floor(Math.random()*vowelArray.length)
  letter = vowelArray[index];
  this.vowels[letter] -= 1;

}

module.exports = Letters;
