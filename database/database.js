const {Sequelize}=require('sequelize');
const database=new Sequelize('backend','root','',{host:'localhost',dialect:'mariadb'})  ;
module.exports=database;