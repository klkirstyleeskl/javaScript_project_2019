
const IndexView = function (container) {
  this.container = container;

};

IndexView.prototype.createElement = function () {

  const lettersContainer = document.createElement('div');
  lettersContainer.id = "letters";

    const word = 'COONTDOON';

    for (letter of word){
    const letterTile = document.createElement('div');
    letterTile.classList.add("letters");


    const letterFormat = document.createElement('h2');
    letterFormat.textContent = letter;
    letterTile.appendChild(letterFormat);
    lettersContainer.appendChild(letterTile);

    this.container.appendChild(lettersContainer);
};

};


module.exports = IndexView;
