const express=require('express')
const router=express.Router()
const {addSubject,getSubject}=require('../Controllers/subjectControlller')
router.route('/add').post(addSubject)
router.route('/allsubject').get(getSubject)
module.exports=router