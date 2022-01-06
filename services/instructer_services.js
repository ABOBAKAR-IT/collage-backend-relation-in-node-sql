const INSTRUCTER = require("../model/instructer_model");

    module.exports.add_Ins=async(fname,lname,ph)=>{
       return await INSTRUCTER.create({
           firstName:fname,
           lastName:lname,
           phone:ph,
           tbDepartmentId:1
       })}

       module.exports.update_Ins=async(id,fname,lname,ph)=>{
           return await INSTRUCTER.update({
               firstName:fname,
               lastName:lname,
               phone:ph
           },{where:{id:id}})
       }

       module.exports.delete_Ins=async(id)=>{
           return await INSTRUCTER.destroy({where:{id:id}})
       }

       module.exports.find_all_Ins=async()=>{
           return await INSTRUCTER.findAll();
       }
       
module.exports.find_one_Ins=async(id)=>{
    return await INSTRUCTER.findAll({where:{id:id}})
}
