const express = require('express')
const app = express()

const {value} = require('./test')

app.get('/' , function(req,res){
  res.json([{name:"Shwetank", id: 4}, {name:"Mishra", id: 10}])
})

app.get('/value' , function(req,res){
  res.json(value)
})

app.listen(5000,function(){
  console.log("SV IS ON ON 5000")
})