const express = require('express')
const app = express()

const { products } = require('./data')

app.get('/', (req, res) => {
  res.send("<h1>HOme page</h1><a href='/products'>Products</a>")
})
// here we are selective of what we are sending back so we are destructuring the vlaues we need and then displaying them
app.get('/products', function(req,res){
  const newProducts = products.map(function(item){
    const {id,name,image} = item
    return({id,name,image})
  })

  res.json(newProducts)
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
