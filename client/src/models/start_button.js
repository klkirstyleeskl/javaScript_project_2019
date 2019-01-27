

const StartButton = function() {

};


StartButton.prototype.startGame = function () {
  const startButton = document.querySelector('#start-button');
  const secondsHand = document.querySelector('.seconds-container');
  startButton.addEventListener('click', function() {
    secondsHand.classList.remove('animate');
    setTimeout(function() {
      secondsHand.classList.add('animate');
    }),1
  });
};


module.exports = StartButton;
