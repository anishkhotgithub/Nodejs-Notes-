fs.mkdir('tutorial2',(err)=>
{
    if (err) 
    {
        console.log(err);    
    } else {
        fs.writeFile('./tutorial2/example2.txt','Hello World',(err)=>
        {
            if (err)
            {
                console.log(err);
            } else 
            {
                console.log('Successfully created file inside the folder');
            }
        })        
    }
})