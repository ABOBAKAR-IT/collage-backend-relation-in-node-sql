const datatype=require('sequelize')
const database = require('../database/database')
const STUDENT =database.define('tb_student',{
    id:{
        type:datatype.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    firstName:{
        type:datatype.STRING
    },
    lastName:{
        type:datatype.STRING
    },
    phone:{
        type:datatype.STRING
    }
})
module.exports=STUDENT