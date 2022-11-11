const mongoose=require('mongoose')

const attendanceSchema=new mongoose.Schema({
        studentID:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        },
        subjectID:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Subject"
        },
        date:{
            type:Date,
            default:Date.now()
        }
        
}

)
module.exports=new mongoose.model("Attendance",attendanceSchema)