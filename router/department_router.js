const express=require('express')
const {add, update, show} = require("../controlar/department_controlar");
const department_router=express.Router()
department_router.post('/addDep',add)
department_router.post('/updateDep',update)
department_router.get('/showDep',show)
module.exports=department_router