import express from 'express';
import mongoose from 'mongoose';

var app = express()
const port = process.env.PORT || 5002


app.get('/', (req,res)=>{
    res.send("lol")
} )

app.listen(port,()=>{
    console.log(`listening on port : ${port}`)
})