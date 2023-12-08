const express= require("express");
const https=require("https");
const bodyparser=require("body-parser");



const app=express();
app.use(bodyparser.urlencoded({extended:true}));

app.get("/",(req,res)=>{

    res.sendFile(__dirname+"/index.html");
});


app.post("/",function(req,res){

    console.log(req.body.cityname);
    const query=req.body.cityname;
    const apikey="bfb6f9eae0baa6a8bab4888d3b8dc5e7#";
    const units="metric";
    const url="https://api.openweathermap.org/data/2.5/forecast?q="+query+"&appid="+apikey+"&units="+units;
    
    https.get(url,function(response){
        console.log(response.statusCode);

        response.on("data",function(data){
            const weatherdata=  JSON.parse(data);
            const temp=weatherdata.list[0].main.temp;
            const desc=weatherdata.list[1].weather[0].description;
            const icon =weatherdata.list[0].weather[0].icon;
            const imgurl="https://openweathermap.org/img/wn/"+icon+"@2x.png";
            console.log(imgurl);
            //https://openweathermap.org/img/wn/04d@2x.png
            res.write("<h1>Weather in "+query+" is "+desc+"</h1>"+"<h2>Temperatue is "+temp+"</h2>");
            res.write("<img src="+imgurl+">");
            res.send();
        });
    });

});






app.listen(3000,function(){
    console.log("Server is running on port 3000");
});

