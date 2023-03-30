const express = require('express')

const app = express()

// app.get('/', function(req, res){
//   res.send("<h1>Home page</h1>")
// })

app.use(express.static("./public"))

app.listen(5000, function(){
  console.log("APP ON PORT 5000")
})