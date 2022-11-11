const Lecture=require('../Models/lectureModel')
const date=new Date().setUTCHours(0,0,0,0)
const totalClass=async(req,res)=>{
    try{
        const subjectID=req.body.subjectID
        const check=await Lecture.find({subjectID,date})
        if(!check.length){
            const lecture=await Lecture.create({
               subjectID,date
            })
            res.json({
                lecture
            })
        }
        else{
            res.json({
                message:"class marked"
            })
        }
    }
    catch(e){
        console.log(e)
    }
}

const tablr=async(req,res)=>{
    try{
        
    }
    catch(e){
        console.log(e)
    }
}
module.exports={totalClass}