const express = require('express');
const router = express.Router();

const questionRouter = require('./Question');
const answerRouter = require('./Answer');
const repliesRouter = require('./Replies');
const usersRouter = require('./User');

router.get('/', (req, res) => {
    res.send("This api is reserved for Quora Clone");
})

router.use('/questions', questionRouter);
router.use('/answers', answerRouter);
router.use('/replies', repliesRouter);
router.use('/users', usersRouter);

module.exports = router