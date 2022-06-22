const express = require('express');
const router = express.Router();

const questionRouter = require('./Question');
const answerRouter = require('./Answer');
const repliesRouter = require('./Replies');

router.get('/', (req, res) => {
    res.send("This api is reserved for Quora Clone");
})

router.use('/questions', questionRouter);
router.use('/answers', answerRouter);
router.use('/replies', repliesRouter);

module.exports = router