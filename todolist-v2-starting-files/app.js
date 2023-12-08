//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const date = require(__dirname + "/date.js");
const _=require('lodash');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// var items = [];
// const workItems = [];

mongoose.connect('mongodb+srv://admin-abhinav:tMWszhq5Dyi9Mk8X@cluster0.t9tzhn0.mongodb.net/todolistDB?retryWrites=true&w=majority');

const itemSchema = {
  name: String
};

const Item = mongoose.model('Item', itemSchema);

const item1 = new Item(
  {
    name: "to sip coffee"
  });

const item2 = new Item({
  name: "To code duhh"
});

const item3 = new Item({
  name: "Peace"
});

const defaultItems = [item1, item2, item3];







app.get("/", function (req, res) {

  const day = date.getDate();
  Item.find({}).then((data) => {
    console.log(data.length);
    if (data.length === 0) {
      Item.insertMany(defaultItems).then((res) => {
        console.log("Succefuly inserted" + res);
      });
      res.redirect("/");
    }
    //items.push(res.name);
    res.render("list", { listTitle: day, newListItems: data });
  });


});





app.post("/delete",function(req,res){
  console.log(req.body.checkbox);
  const listname=req.body.listname;
  const checkeditem=req.body.checkbox;
  var List="";
  try{
   List =mongoose.model("List",listSchema)
  }
  catch(err){
    List=mongoose.model("List")
  }

  if(listname=="Today")
  {
    Item.deleteOne({name:checkeditem}).then(()=>{
      console.log("Removed"+"  "+checkeditem);
    })
    res.redirect("/");
  }
  else
  {
    List.findOneAndUpdate({name:listname},{$pull:{items:{name:checkeditem}}}).then((foundlist)=>{
      console.log("Sucesss");
      console.log(foundlist);
      res.redirect("/"+listname);
    })
  }




});





app.get("/:customlistname",function(req,res){

  const customlistname=_.capitalize(req.params.customlistname);
  const listSchema={
    name:String,
    items:[itemSchema]
  };

  var List="";
  try{
   List =mongoose.model("List",listSchema)
  }
  catch(err){
    List=mongoose.model("List")
  }

  List.findOne({name:customlistname}).then((foundlist)=>{
    //console.log(foundlist)
    if(foundlist===null)
    {
      console.log("No");
      const list=new List({
        name:customlistname,
        items:defaultItems
      });
      list.save();
      res.redirect("/"+customlistname);
    }
    else{
      console.log("Already Exists");
      res.render("list", { listTitle: foundlist.name, newListItems: foundlist.items });

    }
    
  })
  
})



app.post("/", function (req, res) {

  const itemName = req.body.newItem;
  const listname=req.body.list;
  //let List=mongoose.model("List");

  const item =new Item({
    name:itemName
  });

  if(listname===date.getDate())
  {
    item.save();
    res.redirect("/");
  }
  else{
     mongoose.model("List").findOne({name:listname}).then((foundlist)=>{
        foundlist.items.push(item);
        foundlist.save();
        res.redirect("/"+listname);
     })
  }

    //items.push(item);
  
});


app.listen(3000, function () {
  console.log("Server started on port 3000");
});
