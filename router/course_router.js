const express=require('express')
const { add, update, dlt, find } = require('../controlar/courses_controlar')
const courses_router=express.Router()
courses_router.post('/add',add)
courses_router.post('/update',update)
courses_router.post('/delete',dlt)
courses_router.post('/find',find)
module.exports=courses_router


