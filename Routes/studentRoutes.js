const express=require('express')
const router=express.Router()
const {createUser,getallStudents,getStudent}=require('../Controllers/studentController')
router.route('/user').post(createUser)
router.route('/allstudent').get(getallStudents)
router.route('/email').get(getStudent)

module.exports=router