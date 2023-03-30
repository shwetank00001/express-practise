const express = require('express')
const app= express()


app.get('/', function(req,res){
    res.send('Home Page')

})

app.get('/contact', function(req,res){
    res.status(200).send('Contact page')
})

app.all('*', function(req,res){
    res.status(404).send('Error 404')
})


app.listen(5000 , function(){
    console.log('Server is running on port 5000')
})


//app.get
//app.post
//app.put
//app.delete
//app.get
//app.all
//app.listen
//app.use - > middleware