import express from "express"
// require('dotenv').config()
import 'dotenv/config'

const app = express()
const port = 4000

app.get("/",(req,res)=>{
    res.send("Hello World")
})

app.get("/login",(req,res)=>{
    res.send(`<h2>Please Login Here</h2><input type="text">`)
})

app.listen(process.env.PORT,()=>{
    console.log("Welcome in exprees js");
})