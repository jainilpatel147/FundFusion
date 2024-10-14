var express= require('express');
var user = express.Router();
var userFunc = require("../lib/UserFunc");
var fs = require('fs');
const {body, validationResult} = require('express-validator');

const bodyParser = require('body-parser');
user.use(bodyParser.json());
user.use(bodyParser.urlencoded({extended:true}));

const cors = require('cors');
user.use(cors());

function log(req,res,next){
    var date = new Date();
    var log = "\nUrl:- "+ req.originalUrl + ", Time:- "+ date.getHours() +":"+date.getMinutes()+":"+ date.getSeconds();
    fs.appendFileSync("./app_logs/api_log_user.txt",log);
    next();
}

user.use(log);
user
    .route("/me")
    .get((req,res) =>{
        userFunc.getUser();
    })
    .put((req,res)=>{
        const newUser = req.body;

        userFunc.updateUser()
    })

//Register the new user
user.post('/register',[
    body('email',"invalid email address").isEmail(),
    body('name',"invalid Name").isLength({min:3 ,max:20}),
    body('password',"inValid password").isLength({min:5})], 
async function(req,res){
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    const newUser = req.body;
    var result = await userFunc.createUser(newUser.name,newUser.email,newUser.password,newUser.profilePicture);
    console.log(result);
    res.send("user created successfully");
    
});

user.post('/login',async function(req,res){
    const userReq = req.body;
    var result = await userFunc.validateUser(userReq.name,userReq.password);
    console.log(result);
    res.json({"login" : true});
    
});
user.delete('/:id',async function(req,res){
    const userid= req.params.id;
    var result = await userFunc.deleteUser(id);
})

module.exports= user;