const mongoose=require('mongoose')

const subjectSchema=new mongoose.Schema({
    subjectName:{
        type:String
    },
    subjectCode:{
        type:String,
        unique:true
    }
})


module.exports=new mongoose.model("Subject",subjectSchema)

