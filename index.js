require ('dotenv').config(); 
const express=require("express"); 
const app = express(); 

app.get("/",(req,res)=>
{
    res.send("Hello anindo"); 
})
app.listen(process.env.PORT,()=>
{
    console.log("Server starts");
})
