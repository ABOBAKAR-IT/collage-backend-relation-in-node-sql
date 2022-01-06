const express=require('express')
const app=express();
const database=require('./database/database')
const department_route=require('./router/department_router');
const Instructur_router = require('./router/instructur_router');
const relation=require('./relationship/relationship');
const courses_router = require('./router/course_router');
const student_router = require('./router/student_router');
const course_student_router = require('./router/course_student_router');
app.use(express.json())
app.use("/dep",department_route)
app.use("/Ins",Instructur_router)
app.use("/course",courses_router)
app.use("/student",student_router)
app.use("/cs",course_student_router)
const port=8000;
app.listen(port,()=>{
    console.log(`server work on port no ${port}`)
})
database.authenticate().then(()=>{
    console.log('database connected successful')
 //database.sync({alter:true}) ;
}).catch(err=>console.log(err))

