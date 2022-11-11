const mongoose=require('mongoose')
const lectureSchema=new mongoose.Schema({
    subjectID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Subject"
    },
    date:{
        type:Date,
        default:Date.now()
    }
})
module.exports=new mongoose.model("Lecture",lectureSchema)