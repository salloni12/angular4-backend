var express=require("express");
var cors= require('cors');
var bodyParser= require('body-parser');
var mongoose= require('mongoose');

var User=require('./models/User.js');

var port=3000;

var app=express();

app.use(express.static(__dirname));




var posts=[
    {message:"hello"},
    {message:"hii"}

]

app.use(cors());

app.use(bodyParser.json());

app.get("/posts",(req,res)=>{

    res.send(posts);
});

app.post("/register",(req,res)=>{

    var userdata=req.body;

    var user=new User(userdata);

    user.save((err,res)=>{
        if (err)
            console.log('saving user error')

        res.sendStatus(200);
    });
    console.log(userdata.email);
    res.sendStatus(200);
    //console.log(req.body);
});


mongoose.connect('mongodb://root:root123@ds163530.mlab.com:63530/pssocial1',{useMongoClient:true},(err)=>{

    if(!err)
        console.log('connected to mongodb')

});



app.listen(port,()=>{

    console.log("server started at port 3000");
})