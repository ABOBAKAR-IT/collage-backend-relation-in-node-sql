const express=require('express');
const { add, update , findall, dlete, findone} = require('../controlar/Instructor_controlar');
const Instructur_router=express.Router();
Instructur_router.post('/add',add)
Instructur_router.post('/update',update)
Instructur_router.post('/delete',dlete)
Instructur_router.get('/find_All',findall)
Instructur_router.get('/find_one',findone)
module.exports=Instructur_router