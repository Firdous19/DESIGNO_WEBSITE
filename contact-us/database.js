const mongoose = require("mongoose"); 
mongoose.connect("mongodb+srv://admin:5MYznlEixSiDQoWi@cluster0.182kjcd.mongodb.net/"); 

mongoose.model("user-details",{
    name : String,
    password : String
})

module.exports = {mongoose}; 

