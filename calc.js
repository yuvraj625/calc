//jshint esversion:6
const express =require("express");
const bodyParser= require("body-parser");

const app=express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.get('/',function(req,res){
  res.sendFile(__dirname+"/index.html")
});

app.post('/',function(req,res){

  var num1=Number(req.body.number1);
  var num2=Number(req.body.number2);

  var result1= num1+num2;
  res.send("The result of the calculation is :" + result1);
});

app.get('/bmicalculator',function(req,res){
  res.sendFile(__dirname+"/bmi.html");
});

app.post('/bmicalculator',function(req,res){
  var height=Number(req.body.height);
  var weight=Number(req.body.weight);

  var result0=(weight/height);
  res.send("The result of the bmicalculation is :" + result0);
});

app.get('/about',function(req,res){
    res.sendFile(__dirname+"/about.html");

});


app.listen(8080,function() {
  console.log("Started correctly on 8080");

});
