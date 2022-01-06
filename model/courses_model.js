const datatype=require('sequelize')
const database = require('../database/database')
const COURSES=database.define('tb_course',{
    id:{
        type:datatype.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:datatype.STRING
    }
})
module.exports=COURSES