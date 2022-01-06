const express=require('express')
const { add, update, dlt, find } = require('../controlar/course_student_controlar')
const course_student_router=express.Router()
course_student_router.post('/add',add)
course_student_router.post('/update',update)
course_student_router.post('/delete',dlt)
course_student_router.post('/find',find)
module.exports=course_student_router