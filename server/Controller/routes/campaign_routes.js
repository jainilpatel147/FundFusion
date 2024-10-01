var express= require('express');
var campaign = express.Router();
var campaignData = require("../../Model/model");
var fs = require('fs');

function log(req,res,next){
    var date = new Date();
    var log = "\nUrl:- "+ req.originalUrl + ", Time:- "+ date.getHours() +":"+date.getMinutes()+":"+ date.getSeconds();
    fs.appendFileSync("api_log_campaign.txt",log);
    next();
}

campaign.use(log);
campaign
    .route("/")
    .post((req,res)=>{
        res.send("got post route on /api/campaigns/");
    })
    .get((req,res)=>{
        res.send("got get route on /api/campaigns/");
    })
campaign
    .route("/:id")
    .get((req,res) =>{
        res.send("got route on /api/campaigns/me (get)");
    })
    .put((req,res)=>{
        res.send("got route on /api/campaigns/me (put)");
    })
    .delete((req,res)=>{
        res.send("Got delete request on /api/campaigns/delete")
    })

// campaign.get('/campaigns',function(req,res){
//     campaignData.find()
//     .then((result)=>{
//         res.render('Show_campaigns',{result});
//     })
//     .catch((result)=>{
//         res.send("Cannot fetch the documents..");
//     })
// });


module.exports= campaign;