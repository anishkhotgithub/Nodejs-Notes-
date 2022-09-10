//Stream we use because to read largedatas for u can say file in Gigabyte or above 
const fs=require('fs');
const readStream=fs.createReadStream('./example.txt','utf8')
readStream.on('data',(chunk)=>
{
    console.log(chunk);
})