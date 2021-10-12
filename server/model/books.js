const mongoose = require('mongoose');
var schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    authid: {
        type: String,
        required: true
    }
    ,
    author: {
        type: String,
        required: true
    },
    isbn: {
        type:String,
        required: true,
        unique: true
    },
    unq: {
        type: String
    }
})


const userDB = mongoose.model('book',schema);
module.exports=userDB;