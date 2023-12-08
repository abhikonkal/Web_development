const express = require('express');

const app = express();
const mongoose = require("mongoose");

db_url = "mongodb://localhost:27017";

db_fin = db_url + "/" + "fruitsDB";
console.log(db_fin);
console.log(db_url);

mongoose.connect(db_fin);

const fruitschema = new mongoose.Schema({
    name: {
        type: String,
        required:[true , "Some Fruit-As no Name given"]
    },
    rating: {
        type:Number,
        min:1,
        max:10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitschema);

const fruit = new Fruit({
    name: "Jack fruit",
    rating: 4,
    review: "Pretty Solid"
});

 fruit.save();

const personschema = new mongoose.Schema({
    name: String,
    age: Number,
    favfruit:fruitschema

});

const Person = mongoose.model("Person", personschema);


const pineapple =new Fruit(
    {
        name:"guava",
        rating:5,
        review:"Pineeeeeeeeeeeee"
    }
) ;

pineapple.save()

const person = new Person({
    name: "john",
    age: 27,
   //favfruit:pineapple
});


person.save();

// const conn=mongoose.connection;

// const kiwi = new Fruit({
//     name: "kiwi",
//     rating: 3,
//     review: "Good"
// });

// const banana = new Fruit
//     ({
//         name: "banana",
//         rating: 10,
//         review: "GOOD !!!"
//     });

//Fruit.insertMany([kiwi,banana]);





Fruit.updateOne({_id:"648e9a833de334f4391ed16d"},{name:"Peach"}).then()
{
        console.log("Succefully Updated");
}

Fruit.deleteOne({name:"Peach"}).then()
{
    console.log("Succesfully dleted");
}

// Fruit.find().then((data,err) => {

//     if (err) {
//         //console.log(err)
//     }
//     else {
//         //mongoose.connection.close();
//         //console.log(data);
//         data.forEach(function (fruit) {
//             console.log(fruit.name);
//         });
//     }
// });


Person.deleteOne({name:"johny"}).then()
{
    console.log("Succesfully deleted");
}

var getfruitname="";

Person.find().then((data) => {
    data.forEach(function(person)
    {
        console.log(person.name);
        getfruitname=person.favfruit.name;
        console.log(getfruitname);
        
    })
});

Person.updateMany({name:"john"},{favfruit:pineapple}).then()
{
    console.log("Succesfully Updated Fruiot of john");
}

console.log("wrrr"+getfruitname);


app.listen(3000, () => {
    console.log("Server Up!");
})