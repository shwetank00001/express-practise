const express = require('express')
const app = express()

const {products} = require('./data')

app.get('/', function(req,res){
  res.send('<h3>This is products page</h3><a href="/products">Click to view products with few details</a>')
})

// selecting few data and only displaying it.
app.get('/products',function(req,res){
  const newProd = products.map(function(item){
    const {id, name,price} = item
    return({id,name, price})
  })
  res.send(newProd)
})
app.listen(5000, function(){
  console.log("APP ON PORT- 5000")
})