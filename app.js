const express = require('express')
const app= express()

const {products} = require('./data')





app.get('/', (req,res)=>{
  res.send('Home Page! <a href= "/products">Click here </a><a href="/products/api">CLick for few Data</a>')
})

app.get('/products', function(req,res){
  res.json(products)
})

app.get('/products/api', function(req,res){
  const newProd = products.map(function(item){
    const {id,name} = item
    return({id,name})
  })

  res.send(newProd)
  
})

app.listen(5000, ()=>{
  console.log('AT port 5000')
})