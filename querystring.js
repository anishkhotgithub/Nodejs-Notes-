const query=require('querystring');
var q = query.parse('year=2017&month=february');
console.log(q.year);