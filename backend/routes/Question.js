const express = require('express');
const router = express.Router();

const questionModel = require('../models/Question');

router.post('/', async (req, res) => {
    try {
        await questionModel.create(
            {
                questionName: req.body.questionName,
                questionUrl: req.body.questionUrl
            }
        ).then(() => {
            res.status(201).send({
                status: true,
                message : "Question Added Succesfully"
            })
        }).catch((err) => {
            res.status(400).send({
                status: false,
                message:"Bad Request"
            })
        })
    } catch (e)
    {
        res.status(500).send({
            status: false,
            message : "Internal Server Error"
        })
    }
    console.log(req.body);
});

router.get("/", async (req, res) => {
    try {
      await questionModel
        .aggregate([
          {
            $lookup: {
              from: "answers", //collection to join
              localField: "_id", //field from input document
              foreignField: "questionId",
              as: "allAnswers", //output array field
            },
          },
        ])
        .exec()
        .then((doc) => {
          res.status(200).send(doc);
        })
        .catch((error) => {
          res.status(500).send({
            status: false,
            message: "Unable to get the question details",
          });
        });
    } catch (e) {
      res.status(500).send({
        status: false,
        message: "Unexpected error",
      });
    }
  });

module.exports = router;