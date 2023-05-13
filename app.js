const express = require('express')
const app = express()
const {people} = require('./data')


// static page using methods-public

app.use(express.static('./methods-public'))

// parse form data

app.use(express.urlencoded({extended:false}))



// we use GET to read the data

app.get('/api/people', (req,res)=>{
    res.status(200).json({status:"OK",data:people})
})

// how can we insert data on server ? We use POST method to send data

app.post('/login', (req,res)=>{

    console.log(req.body)
    const {name, year} = req.body
    
    if(name){
        return res.send(`Welcome ${name} ${year}`).status(200)
    }
    else{
        res.send("Add a name")
    }
    
})

// In web development, req.body is an object that contains data submitted in the body of an HTTP POST request.

// When a client sends an HTTP POST request to a server, the data submitted in the body of the request can be accessed on the server-side using req.body. This data can be in various formats such as JSON, XML, or plain text.

// For example, if a user submits a form with fields like name, email, and message, the data entered in these fields will be sent in the body of the HTTP POST request. The server can then use req.body to access this data and process it accordingly.

// In order to use req.body in a Node.js server, you typically need to use a middleware like body-parser to parse the request body before it can be accessed. This middleware can extract the submitted data and populate req.body with it.




// how can we insert data on server ? We use POST method to send data

app.listen(5000,(req,res)=>{
    console.log("APP ON PORT 5000")
})