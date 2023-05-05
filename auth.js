function auth(req,res,next){
    console.log("AUTH TEST")
    next()
}

module.exports = auth