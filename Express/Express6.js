const express=require('express')
const path=require('path')
const bodyparser=require('body-parser')
const Joi=require('joi')
const app=express()
app.use('/public',express.static(path.join(__dirname,'static')));
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

app.get('/',(req,res)=>
{
    res.sendFile(path.join(__dirname,'static','index.html'))
})
app.post('/',(req,res)=>
{
    console.log(req.body);
    const schema = Joi.object().keys(
        {
            email: Joi.string().trim().email().required(),
            password:Joi.string().min(5).max(10)
        }
    );
    Joi.valid(req.body,schema,(err,result)=>
    {
        if(err)
        {
            console.log(err);
            res.send('an error has occured')
        }
        console.log(result);
        res.send('successfully send data ')
    })
})
app.listen(5000)