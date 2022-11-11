const User=require('../Models/userModel')
const createUser=async(req,res)=>{
    try{
        const user=await User.create(
            req.body
        ) 
        res.json({
            user
        })
    }
    catch(e){
        console.log(e)
    }
}


const getStudent=async (req,res)=>{
    try{
        const student=await User.find({email:req.body.email})
        res.status(200).json({ student
        })

    }
    catch(e){
        console.log(e)
    }
}

const getallStudents=async (req,res)=>{
    try{
        const student=await User.find()
        res.status(200).json({
            student
        })
    }
    catch(e){
        console.log(e)
    }
}




module.exports={createUser,getStudent,getallStudents}