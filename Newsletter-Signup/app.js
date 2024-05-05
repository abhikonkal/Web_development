const bodyparser=require("body-parser");
const express=require("express");
const request=require("request");
const https=require("https")

const app=express();

app.use(express.static("public"));

//use body parser
app.use(bodyparser.urlencoded({extended:true}));


app.post("/",(req,res)=>
{
    var firstName=req.body.fname;
    var lastName=req.body.lname;
    var email=req.body.email;
    console.log(firstName,lastName,email);
    var data={
        members:[
            {
                email_address:email,
                status:"subscribed",
                merge_fields:{
                    FNAME:firstName,
                    LNMAE:lastName,
                }
            }
        ]
    }
    const jsondata=JSON.stringify(data);
    const url="https://us9.api.mailchimp.com/3.0/lists/2d6ab18678"

    const options={
        method:"POST",
        auth:"",
    };

 
    const request = https.request(url,options,function(response){
        if (response.statusCode===200)
        {
            res.sendFile(__dirname+"/success.html");
        }
        else{
            res.sendFile(__dirname+"/failure.html");
        }
        response.on("data",function(data){
            console.log(JSON.parse(data));
        })
    });

    request.write(jsondata);
    request.end();

});

app.post("/failure",function(req,res){
    res.redirect("/");
});


app.get("/",function(req,res){
    res.sendFile(__dirname+"/signup.html");
})




















app.listen(3000,function(){
    console.log("Server is running on port 3000");
});
