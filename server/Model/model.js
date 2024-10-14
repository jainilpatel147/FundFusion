var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/FundFusion');
const User = require("./Users");
const Campaign = require("./Campaigns");
const Contribution = require("./Contributions");

module.exports= {Contribution,Campaign,User};