const express = require('express')
const app = express()
const {people} = require('./data')


// static page using methods-public

app.use(express.static('./methods-public'))

// parse form data

app.use(express.urlencoded({extemded:false}))



// we use GET to read the data

app.get('/api/people', (req,res)=>{
    res.status(200).json({status:"OK",data:people})
})

app.post('/login', (req,res)=>{
    console.log(req.body)
    res.send("POST")
})

// how can we insert data on server ? We use POST method to send data

app.listen(5000,(req,res)=>{
    console.log("APP ON PORT 5000")
})