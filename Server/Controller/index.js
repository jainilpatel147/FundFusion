const bodyParser = require('body-parser');
var express = require('express');
var app = express();

var api = require("./api");
app.use('/api',api);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','pug');
app.set('views','../View');

app.get('/',function(req,res){
    res.render('login');
});
app.post('/person',function(req,res){
    const personData = req.body;
    if(!personData.uname || !personData.password){
        res.send("Error:Incorrect Data");
    }
    else{
        // var newperson = new model({uname:personData.uname,password:personData.password});
        // newperson.save();
        model.deleteOne({uname:personData.uname})
        .then((result)=>{
            if(result.deletedCount ==1){
                res.send("deleted successfully");
            }
            else{
                res.send("No documents matched");
            }
        })
        .catch((result)=>{
            res.send("error occured");
        })
    }
})



app.listen(3000);