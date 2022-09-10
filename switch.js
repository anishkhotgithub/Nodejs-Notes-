const File=require('fs');
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Plzz Enter the Number: ",function(number)
{
    switch (number) {
        case '1':
            File.writeFile('example1.txt','Hello Crucial World WTF ',(err)=>
            {
                if(err)
                {
                    console.log(err);
                }
                else
                {
                    console.log('file created succesfully');
                }
            });
            break;
        case '2':
                m1();
                break;
    
        default:
            break;
    }
    rl.close();
})
function m1()
{
    File.readFile('example.txt','utf8',(err,file)=>
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
}
rl.on("close", function() {
    console.log("\nBYE BYE !!!");
    process.exit(0);
});
        
