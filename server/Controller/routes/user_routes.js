var express= require('express');
var user = express.Router();
var UserData = require("../../Model/model");
var fs = require('fs');

function log(req,res,next){
    var date = new Date();
    var log = "\nUrl:- "+ req.originalUrl + ", Time:- "+ date.getHours() +":"+date.getMinutes()+":"+ date.getSeconds();
    fs.appendFileSync("api_log_user.txt",log);
    next();
}

user.use(log);
user
    .route("/me")
    .get((req,res) =>{
        res.send("got route on /api/users/me (get)");
    })
    .put((req,res)=>{
        res.send("got route on /api/users/me (put)");
    })

// user.get('/users',function(req,res){
//     UserData.find()
//     .then((result)=>{
//         res.render('Show_Users',{result});
//     })
//     .catch((result)=>{
//         res.send("Cannot fetch the documents..");
//     })
// });
user.post('/register',function(req,res){
    // UserData.findById(req.params.id);
    res.send("got route on /api/users/register");
})
user.post('/login',function(req,res){
    res.send('Got route on /api/users/login through');
});
user.delete('/:id',function(req,res){
    res.send("Delete request found.. on user");
})

module.exports= user;