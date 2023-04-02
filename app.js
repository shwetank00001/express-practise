const express = require('express')
const app = express()

const { people } = require('./data')

app.get('/', (req, res) => {
  res.send('<h1>Click to view database data from data.js</h1><a href="/people">Click Here</a>')
})
app.get('/people',function(req, res){

  const singleData = people.map(function(item){
    const {id} = item
    return({id})
  })
  res.json(singleData)

})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
