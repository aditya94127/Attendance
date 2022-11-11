const Attendance = require('../Models/attendanceModel')
const Enroll = require('../Models/enrollModel')
const Lecture=require('../Models/lectureModel')
const subjectAttendance = async (req, res) => {
    try {
        const studentID = req.body.studentID
        const subjectID = req.params.id
        const date=new Date().setUTCHours(0,0,0,0)
        const enroll = await Enroll.find({ studentID, subjectID })
       
        if (enroll.length) {
            
            const check = await Attendance.find({ studentID, subjectID,date})
            const checkLecture=await Lecture.find({subjectID,date})
            // console.log(check)
            if(!checkLecture.length){
                res.status(200).json({
                    message:"Mark the class first"
                })
                return
            }

            if (!check.length&&(checkLecture.length)) {
                const attendance = await Attendance.create({
                    studentID, subjectID,date
                })
                res.status(200).json({
                    message: "Attendance Marked",
                    attendance
                })
            }
            else {
                res.status(409).json({        
                    message: "Attendance already marked"
                })
            }
        }
        else {
            res.status(404).json({
                message: "Student not enrolled in the course"
            })
        }
   }
    catch (e) {
        console.log(e)
    }
}


const attendanceByDate =async(req,res)=>{
    try{
        const attendance=await Attendance.find({date:req.body.date,subjectID:req.body.subjectID}).populate("studentID")
       
        if(attendance.length){
        res.json({
            attendance
        })
    }
    else{
        res.json({
            message:"Attendance not found"
        })
    }
    }
    catch(e){
        console.log(e)
    }
}

const eligibility=async(req,res)=>{
    try{
        const subjectID=req.params.id
        const totalClass =await Lecture.find({subjectID})
        const attendedClass =await Attendance.find({subjectID,studentID:req.body.studentID})

        const total=totalClass.length
        const attended=attendedClass.length
       
        if((attended/total)*100>75.0){
            res.status(200).json({
                totalclass:total,
                attend:attended,
                percentage:((attended/total)*100).toPrecision(3)+" %"
              
            })
            return
         }
         else{
            res.json({
                totalclass:total,
                attend:attended,
                percentage:((attended/total)*100).toPrecision(3)+" %"
               
            })
         }
    }
    catch(e){
        console.log(e)
    }
}





module.exports = {subjectAttendance,attendanceByDate,eligibility}