const express=require("express")
const mongoose = require("mongoose");
const User =require("./userSchema");
const router=express.Router()



router.post('/User',async(req,res)=>{
    const {name,password} = req.body
    const user = new User({name : name, password : password })
    await user.save()
        res.status(200).json({message:"user post route accesed"})  
    try{
           }
    catch(error){
        console.log(error)
        res.status(500).json({error:"no user added"})
    }
})
module.exports=router