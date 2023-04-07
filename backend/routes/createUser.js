const express=require("express");
const Users = require("../models/Users");
const router=express.Router();
const { body, validationResult } = require('express-validator');
const jwt= require("jsonwebtoken")
const JWTSECRET="Iamsujalchordiaandiamhavingagoodday"
const bcrypt= require("bcryptjs")


router.post("/createuser",[
body('email').isEmail(),
body('password',"Incorrect Password").isLength({ min: 5 }),
body('name').isLength({ min: 5 })],
    async(req,res)=>{

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const salt=await bcrypt.genSalt(10);
    let securedPassword= await bcrypt.hash(req.body.password,salt)
    try{
        await Users.create({
            name: req.body.name,
            location: req.body.location,
            email: req.body.email,
            password: securedPassword,
        })
        res.json({success:true})
    }catch(err){
        console.log(err)
        res.json({
            success:false
        })
    }
})

router.post("/loginuser",[
    body('email').isEmail(),
    body('password',"Incorrect Password").isLength({ min: 5 })],
        async(req,res)=>{
    
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        let email =req.body.email;
        let password=req.body.password
        try{
            let userData=await Users.findOne({email})
            if(!userData){
                return res.status(400).json({ errors: "Try logging in with correct credentials" });
            }
            const cmprPassword=await bcrypt.compare(password,userData.password)
            if(!cmprPassword){
                return res.status(400).json({ errors: "Try logging in with correct password" });
            }
            const data={
                user:{
                    id:userData.id,
                }
            }
            const authToken=jwt.sign(data,JWTSECRET)
            if(cmprPassword){
            return res.json({success:true,authToken:authToken})
            }
        }catch(err){
            console.log(err)
            res.json({
                success:false
            })
        }
    })


module.exports=router