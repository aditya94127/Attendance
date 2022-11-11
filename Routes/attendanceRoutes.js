const express=require('express')
const router=express.Router()
const {subjectAttendance,attendanceByDate,eligibility}=require('../Controllers/attendanceController')
router.route('/subjectattendance/:id').post(subjectAttendance)
router.route('/date').get(attendanceByDate)
router.route('/eligible/:id').get(eligibility)
module.exports=router