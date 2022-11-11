const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    email:{
        type:String
    },
    studentName:{
        type:String
    },
    branch:{
        type:String
    }
})

module.exports=new mongoose.model("User",userSchema)