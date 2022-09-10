const fs= require('fs')
const first=fs.readFileSync('./content/subfolder/first.txt','utf8')
const second=fs.readFileSync('./content/subfolder/second.txt','utf8')

console.log(first);
console.log(second);
fs.writeFileSync
(
    './content/subfolder/result-sync2.txt',
    `Here is the result : ${first}, ${second}`,
    {flag:'a'}
)