import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import mongo from './api.js';

// env config
dotenv.config();
const port = process.env.PORT || 5002
const uri = process.env.MONGOURI

//db config
mongoose.connect(uri);

var app = express()

//middlewear
app.use(express.json())
app.use(cors())

//api's
app.get('/', (req,res)=>{
    res.send("lol")
} )

app.listen(port,()=>{
    console.log(`listening on port : ${port}`)
})

app.post('/new/channel',(req,res)=>{
    var data = req.body
    mongo.create(data,(err,data)=>{
        if(err)res.status(500).send("Failed to create")
        else{
            res.status(201).send("created new channel")
        }
    })
})

app.get('/get/channelList',(req,res)=>{
    var data = req.body
    mongo.find(data,(err,data)=>{
        if(err)res.status(500).send("Failed to create")
        else{
            var channel = data.map(e => ({
                'id' : e._id,
                'name' : e.channelName
            }))
            res.status(200).send(channel)
        }
    })
})

app.post('new/message',(req,res)=>{
    const id = req.query.id
    const newmsg = req.body
    mongo.updateOne({_id:id},{$push:{conversation : req.body}})
})