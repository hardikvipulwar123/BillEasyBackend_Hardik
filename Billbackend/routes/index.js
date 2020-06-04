//postgre database included
const Client = require('pg').Client

//database properties
const client = new Client({
 user :"shoot",
 password :"shoot",
 host : "employee",
 port: 5432,
 database : "emp" 


})


//database connected
client.connect()
.then(()=>console.log("connected"))
.then(()=>client.query("select * from employees where name = $1"))
.catch(e=>console.log)
.finally(()=>client.end())
