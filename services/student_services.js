const STUDENT = require("../model/student_model");

module.exports.add=async(fname,lname,ph)=>{
return await STUDENT.create({
    firstName:fname,
    lastName:lname,
    phone:ph
})
}

module.exports.update=async(id,fname,lname,ph)=>{
    return await STUDENT.update({
        firstName:fname,
        lastName:lname,
        phone:ph
    },{where:{id:id}})
}

module.exports.dtl=async(id)=>{
    return await STUDENT.destroy({where:{id:id}})
}

module.exports.find=async()=>{
    return await STUDENT.findAll();
}

module.exports.findone=async(id)=>{
return await STUDENT.findAll({where:{id:id}})
}