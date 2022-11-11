const Subject=require('../Models/subjectModel')

const addSubject=async(req,res)=>{
    try{
        console.log("hii")
        const subject=await Subject.create(
            req.body
        )
        res.status(200).json({
            subject,
            message:"subject added Successfully"
        })
    }
    catch(e){
        console.log(e)
    }
}


const getSubject=async(req,res)=>{
    try{
        const subject=await Subject.find()
        res.json({
            subject,
            total:subject.length
        })
    }
    catch(e){
        console.log(e)
    }
}
module.exports={addSubject,getSubject}