const express= require("express");
const bodyparser=require("body-parser");
const date =require(__dirname+"/date.js");

const app=express();

const items=[];
const workitems=[];

app.set('view engine','ejs');

app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",function(req,res){
    
    let day=date.getdate();

    res.render("list",{Listtitle:day,newlistItem:items});

    //console.log("doneeeeeeeeeee");

});

app.post("/",function(req,res){

    var item=req.body.newitem;
    console.log(req.body);
    if (req.body.list==="Work")
    {
        workitems.push(item);
        res.redirect("/work");
    }
    else{
        items.push(item);
        res.redirect("/");
    }

});


app.get("/work",function(req,res){

    res.render("list",{Listtitle:"Work",newlistItem:workitems});
})

app.post("/work",function(req,res){
    let item=req.body.newitem;
    workitems.push(item);
    res.redirect("/work");

})

app.get("/about",function(req,res){
    res.render("about");
});


app.listen(3000,function(){
    console.log("Server started on 3000");
});

