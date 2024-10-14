var express= require('express');
var user = express.Router();
var Model = require("../../Model/model");
var fs = require('fs');

const bodyParser = require('body-parser');
user.use(bodyParser.json());
user.use(bodyParser.urlencoded({extended:true}));

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

//Register the new user
user.post('/register', async function(req,res){
    const newUser = req.body;
    try{
        const user = await Model.Users.create({"name":newUser.name,"email":newUser.email,"password":newUser.password,"profilePicture":newUser.profilePicture});
        await user.save();
        res.send("user created successfully");
    }
    catch(e){
        console.log(e.message);
    }
});

user.post('/login',function(req,res){
    res.send('Got route on /api/users/login through');
});
user.delete('/:id',function(req,res){
    res.send("Delete request found.. on user");
})

module.exports= user;