const express=  require('express')

const app = express()

function logger(req,res,next){
    const method = req.method
    const url = req.url
    console.log(method,url)
    next()
}

app.use(logger)

app.get('/', (req,res)=> {
    res.send("HOME")
})
app.get('/About',  (req,res)=> {
    res.send("About")
})



// app.get('/', (req,res)=> {
//     const method = req.method
//     const url = req.url
//     console.log(method, url)
//     res.send("Test")
// })
// app.get('/about', (req,res)=> {
//     const method = req.method
//     const url = req.url
//     console.log(method, url)
//     res.send("About")
// })

app.listen(5000, ()=>{
    console.log("APP ON PORT 5000")
})