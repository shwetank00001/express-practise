const http = require('http')

const server = http.createServer(function(req,res){
    // console.log(req.method) GET method
    console.log(req.url)
    if(req.url === '/'){
        res.writeHead(200, {'content-type' : 'text/html'})
        res.write(`<h1>WELCOME</h1>`)
        res.end()
    }
    if(req.url === '/contact'){
        res.end('This is contacts')
    }
})

server.listen(5000)
