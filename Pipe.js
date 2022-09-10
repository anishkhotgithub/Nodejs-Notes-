const fs=require('fs')
const zlib=require('zlib')
// const gzip=zlib.createGzip(); used for compressed the file
const gunzip=zlib.createGunzip();
const readStream=fs.createReadStream('./example3.txt.gz')
const writeStream=fs.createWriteStream('uncompressed.txt')
//readStream.pipe(writeStream);
readStream.pipe(gunzip).pipe(writeStream);