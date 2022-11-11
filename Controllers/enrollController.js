const Enroll=require('../Models/enrollModel')
const userModel = require('../Models/userModel')
const Attendance = require('../Models/attendanceModel')

const enrollStudent =async(req,res)=>{
    try{
            const subjectID=req.body.subjectID
            const studentID=req.params.id
        const check=await Enroll.find({studentID,subjectID})
        
        if(!check.length){
            const enroll=await Enroll.create({
                studentID,subjectID
            })
            res.status(200).json({
                message:"Enrollment Successfull",
                enroll
            })
        }
        else{
            res.status(403).json({
                message:"Student already enrolled"
            })
        }
        
    }
    catch(e){
        console.log(e)
    }
}


const getAllStudentBySubjectId=async(req,res)=>{
    try{
        const student=await Enroll.find({studentID:req.params.id}).populate("subjectID")
        
        res.json({
            student
        })

    }
    catch(e){
        console.log(e)
    }
}

const getAllSubjectByStudentId=async(req,res)=>{
    try{
        const subject=await Enroll.find({subjectID:req.params.id}).populate('studentID')
        res.json({
            subject
        })
    }
    catch(e){
        console.log(e)
    }
}
module.exports={enrollStudent,getAllStudentBySubjectId,getAllSubjectByStudentId}
