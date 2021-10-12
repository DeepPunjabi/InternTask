const mongoose = require('mongoose');
var schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    unq: {
        type: String
    }
})


const userDB = mongoose.model('userdb',schema);
module.exports=userDB;