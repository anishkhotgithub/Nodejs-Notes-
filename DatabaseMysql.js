const mysql=require('mysql');
let con=mysql.createConnection(
    {
        host:"localhost",
        user:"root",
        password:"root",
        database:"mydb"
    }
);
con.connect(function(err)
{
    if(err)
    {
        console.log(err);
    }
    else
    {
        console.log("Connect");
    }
})