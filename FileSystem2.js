const fs=require('fs');

// fs.mkdir('tutorial',(err)=>
// {
//     if(err)
//     {
//         console.log(err);
//     }
//     else{
//         console.log('Successfully created folder');
//         fs.rmdir('tutorial',(err)=>
//         {
//             if (err) {
//                 console.log(err);
//             } else {
//                 console.log('File deleted successfully');
//             }
//         })
//     }
// })

// fs.mkdir('tutorial2',(err)=>
// {
//     if (err) 
//     {
//         console.log(err);    
//     } else {
//         fs.writeFile('./tutorial2/example2.txt','Hello World',(err)=>
//         {
//             if (err)
//             {
//                 console.log(err);
//             } else 
//             {
//                 console.log('Successfully created file inside the folder');
//             }
//         })        
//     }
// })

// fs.unlink('./tutorial2/example2.txt',(err)=>
// {
//     if (err) 
//     {
//         console.log(err);
//     } else 
//     {
//         console.log("File Deleted Successfully");
//         fs.rmdir('tutorial2',(err)=>
//         {
//             if (err) {
//                 console.log(err);
//             } else {
//                 console.log('deleted folder');
//             }
//         })        
//         console.log("Folder Deleted successfully");
//     }
// })

fs.readdir('ReadFile',(err,files)=>
{
    if(err)
    {
        console.log(err);
    }
    else{
        console.log(files);
        console.log('All Files will be Deleted after 6 seconds');
        for(let file of files)
        {
            setTimeout(() => 
            {
                fs.unlink('./ReadFile/'+file,(err)=>
                {
                    if (err) 
                    {
                        console.log(err);    
                    } else {
                        console.log("files Deleted SuccessFully");
                    }              
                })    
            }, 6000);

        }  
      }
})