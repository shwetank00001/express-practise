const express = require('express')
const app = express()




function logger(req,res,next){
  const method = req.method
  const url = req.url
  const time = new Date().getFullYear()
  console.log(method,url,time)
  // res.send("testing") // we are terminating this cycle here
  next()// ALWAYS-> EITHER WE TERMINATE ^^ LIKE THIS HERE OR WE PASS THE CYCLE TO NEXT METHOD

} 


//when we work with middleware, we must send it to nxt middleware
// when we 
app.get('/', logger, function(req,res){
  res.status(200).send('this is home')
})

app.get('/about',logger, (req,res) =>{
  res.status(200).send("this is about")
})

app.listen(5000, ()=>{

  console.log("APP ON PORT 5000")
}) 