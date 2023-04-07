const mongoose = require('mongoose');
const url="mongodb+srv://sujalchordia10:gofood@cluster0.zo0tida.mongodb.net/GoFood?retryWrites=true&w=majority"
const mongodb =async()=>{
    mongoose.set('strictQuery', false);
    await mongoose.connect(url,{dbName:"GoFood",useNewUrlParser:true})
    .then(async()=>{
        const fetched_data=await mongoose.connection.db.collection("food_items");
        fetched_data.find({}).toArray(function(err,data){
            if(err){
                console.log(err);
            }
            else{
                global.fooditems=data;
            }
        })
        const fetched_data2=await mongoose.connection.db.collection("food_category");
        fetched_data2.find({}).toArray(function(err,data){
            if(err){
                console.log(err);
            }
            else{
                global.foodcategory=data;
            }
        })
        
    }
    )
    console.log(mongoose.connection.readyState);
}
module.exports=mongodb  