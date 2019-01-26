use countdown;
db.dropDatabase();

db.leaderBoard.insertMany([
  {
    name: "Kirsty",
    score: 8,
  },
  {
    name: "Shabs",
    score: 83,
  },
  {
    name: "Jamie",
    score: 85,
  },
  {
    name: "Andrew",
    score: 122,
  }
]);
