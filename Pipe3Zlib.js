const File=require('fs');
const zlib=require('zlib');
File.createReadStream('./example.txt').pipe(File.createWriteStream('./example.txt.gz'));
console.log("File compressed");