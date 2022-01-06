const Datatype=require('sequelize')
const database=require('../database/database')
const DEPARTMENT=database.define('tb_department',{
    id:{
        type:Datatype.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:Datatype.STRING
    }
})
module.exports=DEPARTMENT;

