

const StartButton = function() {

};

// Supposed to start the clock but not working yet !!
StartButton.prototype.startGame = function () {
  const startButton = document.querySelector('#start-button');
  startButton.addEventListener('click', function() {
    const secondsHand = document.querySelector('.seconds-container');
    console.log('button clicked');
  })
};


module.exports = StartButton;
