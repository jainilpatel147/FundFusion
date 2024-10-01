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

//included user routes
var users = require("./routes/user_routes");
api.use('/users',users);

//included campaign routes
var campaign = require("./routes/campaign_routes");
api.use('/campaigns',campaign);

//include contributions routes
var contribution = require("./routes/contributions_route");
api.use("/contributions",contribution);


// api.get('/users',function(req,res){
//     UserData.find()
//     .then((result)=>{
//         res.render('Show_Users',{result});
//     })
//     .catch((result)=>{
//         res.send("Cannot fetch the documents..");
//     })
// });
// api.get('/users/:id',function(req,res){
//     UserData.findById(req.params.id);
// })
// api.get('/campaings',function(req,res){
//     res.send('Got route on /explore through');
// });
// api.get('/campaings/:title',function(req,res){
//     res.send('Got route on /settings through');
// });
// api.get('/',function(req,res){
//     res.send('Got route on /dashboard through');
// });

module.exports= api;