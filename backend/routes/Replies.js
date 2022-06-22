const express = require('express');
const router = express.Router();

const answerModel = require('../models/Answer');


router.post("/", async (req, res) => {

    try {
        await answerModel.updateOne({
            _id : req.body._id
        }, {
            $push: {
                replies : req.body.replies
            }
            
        })
        .then(() => {
          res.status(201).send({
            status: true,
            message: "Reply added successfully",
          });
        })
        .catch((e) => {
          res.status(400).send({
            status: false,
            message: "Bad request",
          });
        });
    } catch (e) {
      res.status(500).send({
        status: false,
        message: "Error while adding answer",
      });
    }
});

router.get("/", async (req, res) => {
    try 
    {
        const data = await answerModel.findById(req.query.id);
        // console.log(data.replies);
        res.json(data.replies);
    }
    catch (e)
    {
        res.status(500);
    }
    console.log(req.query.id);  
});
module.exports = router; 