const express = require('express');
const ObjectID = require('mongodb').ObjectID

const createRouter = function (collection) {

  const router = express.Router()

  router.get('/', (req, res) => {
    collection
    .find()
    .toArray()
    .then((docs) => res.json(docs))
    .catch((err) => {
      console.err(err);
      res.status(500);
      res.json({ status: 500, error: err})
    })
  })


  return router


}


module.exports = createRouter;
