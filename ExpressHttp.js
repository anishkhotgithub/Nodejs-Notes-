const exress= require('express')
const app= exress()
app.get('/',(req,res)=>
{
    res.send(`<h1>Hello World</h1>`);
})
app.listen(3000)