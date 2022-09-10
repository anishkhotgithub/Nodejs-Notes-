const File=require('fs');
File.writeFile('Hello.txt',"Hello Bitch",(err,file)=>
{
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log(file);
    }
});