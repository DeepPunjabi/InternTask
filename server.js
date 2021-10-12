const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const path = require('path');
const fs = require('fs');
const {v4 : uuidv4} = require('uuid')
const bodyparser = require('body-parser');
const app = express();
const connectDB = require('./server/database/connection');
dotenv.config({path:'config.env'})
const PORT = process.env.PORT || 8081
morgan.token("id",function getid(req){
    return req.id;
})
morgan.token("param",function(req,res,param){
    return "userToken";
})
app.use(assignid);

let access=fs.createWriteStream(path.join(__dirname,"access.log"),{flag:'a'})
app.use(morgan(':id :param :method :status :url "HTTP/:http-version" '));
app.use(morgan(':id :param :method :status :url "HTTP/:http-version" ',{stream : access}));

app.use(morgan('tiny'));
connectDB();
app.use(bodyparser.urlencoded({extended:true}))
app.set("view engine","ejs");
app.use(express.static(path.resolve(__dirname,"/assets")));

app.use('/',require("./server/routes/router"));

app.listen(8081,()=>{
    console.log("Server is running");
});

function assignid(req,res,next){
    req.id=uuidv4();
    next();
}