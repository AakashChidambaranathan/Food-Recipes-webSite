const express =require('express');
const app=express()
const dotenv=require("dotenv").config

const PORT = process.env.PORT||3000

app.get("/" ,(req,res)=>{
    res.json({message:"hello"})
})

app.listen(PORT,(err)=>{
    console.log(`app is listening on port ${PORT}`)
})