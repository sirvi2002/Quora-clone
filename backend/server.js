const express = require('express');
const app = express(); 
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const PORT = 5000;

app.use(cors());
const db = require('./db.js');

const router = require('./routes');

//database connection
db.connect();

//middleware
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

//cors 
app.use((req, res, next) => {
    req.header("Access-Control-Allow-Origin", "*");
    req.header("Access-Control-Allow-Headers", "*");
    next();
});

//routes
app.use('/api', router);


app.use('/uploads', express.static(path.join(__dirname, "/../uploads")));
// app.use(express.static(path.join(__dirname, "/../frontend/build")));

app.get("*", (req, res) => {
    try{
        // res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`));
    } catch (e){
        res.send("Oops! unexpected error");
    }
});


//server listening
app.listen(process.env.PORT || PORT, () => {
    console.log(`Listening on port no ${PORT}`);
});