const express = require('express')
const path = require('path')

const app = express()

app.get('/' , function(req,res){
    res.json([{name: "shwetank" , age: "23"},{name: "shwetank" , age: "23"}])

})

app.listen(5000, function(){
    console.log("sv is on ")
})