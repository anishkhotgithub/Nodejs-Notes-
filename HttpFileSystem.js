const http=require('http')
const fs=require('fs')
http.createServer((req,res)=>
{
    //for Html view
    const readStream=fs.createReadStream('./HttpExample/index.html')
    res.writeHead(200,{'Content-type':'text/html'})

    // //for Image view
    // const readStream=fs.createReadStream('./HttpExample/Anime.jpg')
    // res.writeHead(200,{'Content-type':'image/jpg'})

    // //for JSON view
    // const readStream=fs.createReadStream('./HttpExample/example.json')
    // res.writeHead(200,{'Content-type':'application/json'})

    readStream.pipe(res);
}).listen(3000);