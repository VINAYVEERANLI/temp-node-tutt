const http = require('http')

const server = http.createServer((req,res) =>{
if(req.url==='/'){
    
res.end("hello js node js")
    
}


if(req.url==='/about'){
res.end("here is our short history")
}
res.end(`
<h1>oops</h1>
<p>we cant seem to find the page your looking for</p>
<a href="/">back home </a>
`)


})
server.listen(2000)







