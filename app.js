const express=require('express')
const app=express()
const bodyParser=require('body-parser')

app.use(express.json({
    limit:"50mb",
}))

app.use(bodyParser.urlencoded({
    limit:"50mb",
    extended:true
 }))
const student=require('./Routes/studentRoutes')
const subject=require('./Routes/subjectRoutes')
const enroll=require('./Routes/enrollRoutes')
const attendance=require('./Routes/attendanceRoutes')
const lecture=require('./Routes/lectureRoutes')
app.get('/' , (req,res)=>{
    // 200 status code means OK
    res.status(200).json({
        message:"welcome to our attendance management system"
    }); 
 })
app.use('/api/v1/student',student)
app.use('/api/v1/student',subject)
app.use('/api/v1/student',enroll)
app.use('/api/v1/student',attendance)
app.use('/api/v1/student',lecture)
module.exports=app