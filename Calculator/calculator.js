const express=require("express");
const bodyParser=require("body-parser");

const app=express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    
    res.sendFile(__dirname+"/index.html");
});

app.get("/bmicalci",(req,res)=>{
    res.sendFile(__dirname+"/bmiCalculator.html");
});

app.post("/bmicalci",(req,res)=>{
    var w=Number(req.body.weight);
    var h=Number(req.body.height);
    var bmi=w/(h*h);
    res.send("Your BMI is "+bmi);
})

app.post("/",function(req,res){
    var n1 =Number(req.body.num1);
    var n2= Number(req.body.num2);
    var ans=n1+n2;
    res.send("The answer is "+ans);
});

app.listen(3000,()=>{
    console.log("Server started on port 3000");
});

