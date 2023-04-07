const mongoose = require('mongoose');
const {Schema}=require('mongoose');

const Userschema = new Schema({ 
     name: {
        type: String,
        required:true
     },
     location: {
        type:String,
        required:true
     },
     email: {
        type:String,
        required:true
     },
     password: {
        type:String,
        required:true
     },
     orders: {
      type:Array,
      default:[]
   },
     date: {
        type:Date,
        default:Date.now
     },
    });
module.exports= mongoose.model('user', Userschema);