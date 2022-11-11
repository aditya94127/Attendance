const express=require('express')
const router=express.Router()
const {enrollStudent,getAllStudentBySubjectId,getAllSubjectByStudentId}=require('../Controllers/enrollController')
router.route('/enroll/:id').post(enrollStudent)
router.route('/studentDetail/:id').get(getAllStudentBySubjectId)
router.route('/subjectDetail/:id').get(getAllSubjectByStudentId)
module.exports=router