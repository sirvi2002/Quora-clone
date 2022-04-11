const mongoose = require('mongoose');
const url = "mongodb://sirvi_26:Manoj2002@cluster0-shard-00-00.n79jt.mongodb.net:27017,cluster0-shard-00-01.n79jt.mongodb.net:27017,cluster0-shard-00-02.n79jt.mongodb.net:27017/Quora-clone?ssl=true&replicaSet=atlas-14fk90-shard-0&authSource=admin&retryWrites=true&w=majority";

module.exports.connect = () => {
    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("MongoDB connected successfully");
    }).catch((error) => console.log("Error :- ", error));
};  