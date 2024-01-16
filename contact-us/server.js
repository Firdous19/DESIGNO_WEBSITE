const express=require("express"); 
const cors = require("cors");
const app = express();
const fs=require("fs");

app.use(express.json()); 
app.use(cors());
app.post("/submitForm",(req,res)=>
{
        const user= req.body;
        const content = `username : ${user.username} , email : ${user.userEmail}, Phone Number : ${user.userNumber}, Message : ${user.userDes}\n`; 
        fs.appendFile("../log.txt",content,(err)=>{});
}) 

app.listen(3000,()=>
{
        console.log("Server started");
}); 