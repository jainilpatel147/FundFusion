var express= require('express');
var contribution = express.Router();
var contributionData = require("../../Model/model");
var fs = require('fs');
const cors = require('cors');
contribution.use(cors());
const bodyParser = require('body-parser');
contribution.use(bodyParser.json());
contribution.use(bodyParser.urlencoded({extended:true}));

function log(req,res,next){
    var date = new Date();
    var log = "\nUrl:- "+ req.originalUrl + ", Time:- "+ date.getHours() +":"+date.getMinutes()+":"+ date.getSeconds();
    fs.appendFileSync("./app_logs/api_log_contribution.txt",log);
    next();
}

contribution.use(log);
// contribution.get('/contributions',function(req,res){
//     contributionData.find()
//     .then((result)=>{
//         res.render('Show_contributions',{result});
//     })
//     .catch((result)=>{
//         res.send("Cannot fetch the documents..");
//     })
// });
contribution.post('/',function(req,res){
    // contributionData.findById(req.params.id);
    res.send("got route on /api/contributions and here you will make a contribution");
})
contribution.get('/campaign/:campaignid',function(req,res){
    res.send('Got route on /api/contributions/login through and you will get donations by campaigns');
});
contribution.get('/users/:userid',function(req,res){
    res.send("Delete request found.. on contribution");
})

module.exports= contribution;