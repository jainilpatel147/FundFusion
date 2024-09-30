var express= require('express');
var api = express.Router();
var UserData = require("../Model/model");
var fs = require('fs');

function log(req,res,next){
    var date = new Date();
    var log = "\nUrl:- "+ req.originalUrl + ", Time:- "+ date.getHours() +":"+date.getMinutes()+":"+ date.getSeconds();
    fs.appendFileSync("api_log.txt",log);
    next();
}

api.use(log);

api.get('/users',function(req,res){
    UserData.find()
    .then((result)=>{
        res.render('Show_Users',{result});
    })
    .catch((result)=>{
        res.send("Cannot fetch the documents..");
    })
});
api.get('/users/:id',function(req,res){
    UserData.findById(req.params.id);
})
api.get('/campaings',function(req,res){
    res.send('Got route on /explore through');
});
api.get('/campaings/:title',function(req,res){
    res.send('Got route on /settings through');
});
api.get('/',function(req,res){
    res.send('Got route on /dashboard through');
});

module.exports= api;