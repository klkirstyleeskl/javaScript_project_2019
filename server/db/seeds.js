use scoreBoard;
db.dropDatabase();

db.scores.insertMany([
  {
    name: "Kirsty",
    score: 8,
    date: "2018-06-03"
  },
  {
    name: "Shabs",
    score: 83,
    date: "2018-12-25"
  },
  {
    name: "Jamie",
    score: 85,
    date: "2018-07-03"
  },
  {
    name: "Andrew",
    score: 122,
    date: "2016-10-13"
  }
]);
