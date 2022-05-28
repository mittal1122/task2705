const mongoose = require("mongoose")


const UserSchema = new mongoose.Schema({
    
        FirstName:{
            type:String,
            required:true
        },
        LastName:{
            type:String,
            required:true
        },
        Email:{
            type:String,
            unique:true,
            required:true
            
        },
        password:{
            type:String,
            required:true
        },
        role : {
                type:mongoose.Schema.Types.ObjectId,
                ref:"role"
        },
        City :{
            type:String,
            required:true
        },
        Gender :{
            type:String,
            required:true
        },
        Hobbies:{
            type:String,
            required:true
        },
        Status : {
                type:String
                
        }
}) 


const UserModel = mongoose.model("user",UserSchema)
module.exports = UserModel 