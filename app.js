const express=  require('express')

const app = express()

app.get('/', (req,res)=> {

    const method = req.method
    console.log(method)
    res.send("Test")
})

app.listen(5000, ()=>{
    console.log("APP ON PORT 5000")
})