const http = require('http')z
http.createServer((request,response)=>
{
    response.writeHead(200,{'Content-type':'text/plain'});
    response.write('Hello world')
    response.end()
}).listen('3000')