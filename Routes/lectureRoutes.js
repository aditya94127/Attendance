const express=require('express')
const router=express.Router()
const {totalClass}=require('../Controllers/lectureController')
router.route('/total').post(totalClass)
module.exports=router