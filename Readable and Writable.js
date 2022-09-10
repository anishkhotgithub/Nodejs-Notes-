const fs=require('fs');
const readable=fs.createReadStream('./example.txt','utf8')
const writeable=fs.createWriteStream('./example2.txt')
readable.on('data',(chunk)=>
{
    console.log(chunk);
    writeable.write(chunk);
     
})