const express=require("express")
const app=express()
const mongoose=require("mongoose")
const dotenv=require("dotenv").config()
const registerRoute=require("./User")

mongoose.connect(process.env.CONNECT)
.then(()=>{
    console.log("db connected")
})
.catch((err)=>{
    console.log("error")
})

app.use(express.json())
app.use("/route",registerRoute)
app.listen(3000,()=>{
    console.log("server is running")
})