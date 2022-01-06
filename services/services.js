
const admin = require("../model/admin_model");
const adminRoutes = require("../routers/admin_router");
module.exports.createTable=async(name,roll,cls)=>{
    return await admin.create({
        name:name,
        rollNo:roll,
        class:cls
    })
}
module.exports.updateTable=async(id,roll)=>{
    return await admin.update({rollNo:roll},{where:{id:id}})
}

module.exports.deletedata=async(id)=>{
    return await admin.destroy({where:{id:id}})
}

module.exports.allshow=async()=>{
    return await admin.findAll();
}