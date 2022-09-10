const File=require('fs');
//create file 
// File.writeFile('example.txt','Hello Crucial World WTF ',(err)=>
// {
//     if(err)
//     {
//         console.log(err);
//     }
//     else
//     {
//         console.log('file created succesfully');
//         File.readFile('example.txt','utf8',(err,file)=>
//         {
//             if(err)
//             {
//                 console.log(err);
//             }
//             else
//             {
//                 console.log(file);
//             }
//         })
//     }
// })
//end of create file code

//Rename the file
// File.rename('example.txt','example2.txt',(err)=>
// {
//     if(err)
//     {
//         console.log(err);
//     }
//     else
//     {
//         console.log('File Rename successfully');
//     }
// })
//End

//Append File 
// File.appendFile('example2.txt','Hello Morons', (err)=>
// {
//     if(err)
//     {
//         console.log(err);
//     }
//     else
//     {
//         console.log("File Append Successfully");
//     }
// })
//End
//Delete File
console.log('Files Before Deleting \n');
getFileInDirectories();
File.unlink('example2.txt',(err =>
{
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log("\n File Deleted successfully ");
        console.log('\n Files After Delted the file');
        getFileInDirectories();
    }
}));

function getFileInDirectories()
{
    let files=File.readdirSync(__dirname);
    files.forEach(file => {
        console.log(file);
     });
}