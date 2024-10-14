var express= require('express');
var api = express.Router();
// var UserData = require("../../Model/model");
var fs = require('fs');

function log(req,res,next){
    var date = new Date();
    var log = "\nUrl:- "+ req.originalUrl + ", Time:- "+ date.getHours() +":"+date.getMinutes()+":"+ date.getSeconds();
    fs.appendFileSync("./app_logs/api_log.txt",log);
    next();
}

api.use(log);

//included user routes
var users = require("./user_routes");
api.use('/users',users);

//included campaign routes
var campaign = require("./campaign_routes");
api.use('/campaigns',campaign);

//include contributions routes
var contribution = require("./contributions_route");
api.use("/contributions",contribution);

module.exports= api;