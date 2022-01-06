const datatype=require('sequelize')
const database=require('../database/database')
const INSTRUCTER= database.define('tb_instructure',{
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
module.exports=INSTRUCTER;

