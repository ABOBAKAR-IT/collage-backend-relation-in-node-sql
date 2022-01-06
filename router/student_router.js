const express=require('express')
const { add, update, dlete, findall, findone } = require('../controlar/student_controlar')
const student_router=express.Router()
student_router.post('/add',add)
student_router.post('/update',update)
student_router.post('/delete',dlete)
student_router.get('/find',findall)
student_router.get('/findone',findone)

module.exports=student_router