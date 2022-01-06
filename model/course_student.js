const datatype=require('sequelize')
const database = require('../database/database')
const COURSE_STUDENT=database.define('tb_course_student',{
    id:{
        type:datatype.INTEGER,
      primaryKey:true,
      autoIncrement:true
    }
})
    module.exports=COURSE_STUDENT