var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/FundFusion');
const Users = require("./Users");
const Campaigns = require("./Campaigns");
const Contributions = require("./Contributions");

module.exports= {Contributions,Campaigns,Users};