const express = require('express');
const router = express.Router();
const userModel = require('../models/User');

router.post("/register", async (req, res) => {

    var user = new userModel({
        userName: req.body.username,
        email: req.body.email,
        password: req.body.password
    });

    user.save((err) => {
        if (err === null)
        {
            res.send({
              status: true, message: "Registration Successful"
            })  
          
        }
        else res.send({status : false , message : "Email ID already exist"})
            console.log(err);
    });
});

router.post('/login', async(req, res) => {
    const email = req.body.email;
    console.log(req.body);
    const user = await userModel.findOne({ email }).exec();
    console.log(user);
    if (!user)
    {
        res.send({
            status : false , message : "User Does Not Exist"
        })    
    }
    else 
    {
        if (user.password === req.body.password)
        {
            res.send({
                status : true , message : "Login Successful" , userName : user.userName
            })    
        }
        else 
        {
            res.send({
                status : false , message : "Password incorrect"
            })   
        }    
    }
});

module.exports = router; 