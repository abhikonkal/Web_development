const express=require("express");

const app=express();

app.get("/",function(request,response){
    response.send("<h1>Hello </h1>");
});

app.get("/contact",function(req,res){
    res.send("Contact me at:4667545644756ASD");
});

app.get("/about",function(req,res)
{
    res.send("Mortality and beynd");
});

app.listen(3000,function(){
    console.log("Server started on port 3000");
});

