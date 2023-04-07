const express=require("express");
const Orders = require("../models/Orders");
const router=express.Router();

router.post("/foodData",(req,res)=>{
    try {
        res.send([global.fooditems,global.foodcategory])
    } catch (error) {
        console.log(error.message)
    }
})






module.exports=router