use countdown;
db.dropDatabase();

db.leaderBoard.insertMany([
  {
    name: "Kirsty",
    score: 1,
  },
  {
    name: "Shabs",
    score: 2,
  },
  {
    name: "Jamie",
    score: 3,
  },
  {
    name: "Andrew",
    score: 4,
  }
]);
