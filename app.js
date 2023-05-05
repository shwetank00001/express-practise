const express = require('express')
const app = express()
const {people} = require('./data')

app.get('/', (req,res)=>{
    res.status(200).json({success:"true",people})
})

app.listen(5000,(req,res)=>{
    console.log("APP ON PORT 5000")
})