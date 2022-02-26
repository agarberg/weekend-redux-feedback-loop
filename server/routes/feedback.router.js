const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/',  (req, res) => {
    let newFeedback = req.body;
    console.log(`POST FEEDBACK`, newFeedback);
  
    let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                     VALUES ($1, $2, $3, $4);`;
    pool.query(queryText, [newFeedback.feelingReducer, newFeedback.understandingReducer, newFeedback.supportedReducer, newFeedback.commentReducer])
      .then(result => {
        res.sendStatus(201);
      })
      .catch(error => {
        console.log(`Error adding comment`, error);
        res.sendStatus(500);
      });
  });
  

module.exports = router;