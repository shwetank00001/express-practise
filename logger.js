const logger =(req,res,next) => {
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method,url,time)
    // res.send("testing") // we are terminating this cycle here
    next()// ALWAYS-> EITHER WE TERMINATE ^^ LIKE THIS HERE OR WE PASS THE CYCLE TO NEXT METHOD
  
  }
  
  module.exports = logger