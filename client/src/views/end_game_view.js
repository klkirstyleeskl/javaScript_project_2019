const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js')

const EndGameView = function(container,players){
  this.container = container;
  this.players = players;
  this.leaderboard = ""
  this.request = new RequestHelper('/api/leaderBoard');
}

EndGameView.prototype.generateFinalScoresTable = function() {
  //Extract scores and names from the field
  const player1name = this.players[0];
  const player1score = this.players[1];
  const player2name = this.players[2];
  const player2score = this.players[3];
  console.log(this.players);

  const finalScoreContainer = document.createElement('TABLE');
  finalScoreContainer.style.width = '100%'

  const headerRow = document.createElement('TR');
  const nameHeader = document.createElement('TH');
  nameHeader.textContent = "Name";

  const scoreHeader = document.createElement('TH');
  scoreHeader.textContent = "Score";

  headerRow.appendChild(nameHeader);
  headerRow.appendChild(scoreHeader);
  finalScoreContainer.appendChild(headerRow);

  let dataRow = document.createElement('TR');
  let nameData = document.createElement('TD');
  nameData.textContent = player1name
  let nameScore = document.createElement('TD');
  nameScore.textContent = player1score
  dataRow.appendChild(nameData)
  dataRow.appendChild(nameScore)
  finalScoreContainer.appendChild(dataRow);

  dataRow = document.createElement('TR');
  nameData = document.createElement('TD');
  nameData.textContent = player2name
  nameScore = document.createElement('TD');
  nameScore.textContent = player2score
  dataRow.appendChild(nameData)
  dataRow.appendChild(nameScore)
  finalScoreContainer.appendChild(dataRow);

  this.container.appendChild(finalScoreContainer);
}

EndGameView.prototype.generateHighScoreTable = function () {
  const leaderBoardContainer = document.createElement('TABLE');
  leaderBoardContainer.style.width = '100%'

  const headerRow = document.createElement('TR');
  const nameHeader = document.createElement('TH');
  nameHeader.textContent = "Name";

  const scoreHeader = document.createElement('TH');
  scoreHeader.textContent = "Score";

  headerRow.appendChild(nameHeader);
  headerRow.appendChild(scoreHeader);
  leaderBoardContainer.appendChild(headerRow);

  this.leaderboard.sort(function(a, b){return b.score - a.score});

  this.leaderboard.forEach((row) =>{
    const dataRow = document.createElement('TR');

    const nameData = document.createElement('TD');
    nameData.textContent = row.name

    const nameScore = document.createElement('TD');
    nameScore.textContent = row.score

    dataRow.appendChild(nameData)
    dataRow.appendChild(nameScore)

    leaderBoardContainer.appendChild(dataRow);
  })
  this.container.appendChild(leaderBoardContainer)
}

EndGameView.prototype.setupEventListener = function() {
  this.generateFinalScoresTable();

  this.request
  .post({name: this.players[0], score: this.players[1]})
  .catch((err) => console.error(err));

  this.request
  .post({name: this.players[2], score: this.players[3]})
  .catch((err) => console.error(err));

  this.request
  .get()
  .then((leaderBoard) => {
      this.leaderboard = leaderBoard
      this.generateHighScoreTable();
    })
    .catch((err) => console.error(err));

};
module.exports = EndGameView
