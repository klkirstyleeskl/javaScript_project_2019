console.log('JavaScript Loaded');
document.addEventListener('DOMContentLoaded', () => {

  const letters = document.querySelectorAll('h2');

  const alphabet = ['A','B','C','D','E','F','G','H','I','J','H','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

  letters.forEach((letter) => {
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }

    letter.textContent = alphabet[getRandomInt(26)];
  })

  console.log(letters);

});
