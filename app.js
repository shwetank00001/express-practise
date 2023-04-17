const express = require('express')
const app= express()

const {products} = require('./data')

app.get("/", function(req,res){
  res.send("Hello, these are the products detail, <a href='/products/few'>Click here </a>")
})

app.get("/products/few", function(req, res){
  const newProd = products.map(function(item){
    const {id,name,image} = item
    return({id,name,image})
  })
  res.json(newProd)
})


// app.get("/products/few/1", function(req, res){
//   const singleProd = products.find((item) => item.id ===1)
//   res.send(singleProd)
// })


// ROUTE PARAMS - a placeholder type of where user provides the data
app.get("/products/few/:productID", function(req, res){
  console.log(req)
  console.log(req.params)

  const {productID} = req.params
  const singleProd = products.find((item) => item.id ===Number(productID))

  if(!singleProd){
    res.status(404).send("Product does not exist")
  }
  res.send(singleProd)
})


app.listen(5000, function(){
  console.log("APP ON PORT 5000")
})