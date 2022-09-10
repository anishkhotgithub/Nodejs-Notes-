const File=require('fs');
const readStream =File.createReadStream('./example2.txt','utf8');
const writeStream=File.createWriteStream('./example5.txt');
readStream.pipe(writeStream);