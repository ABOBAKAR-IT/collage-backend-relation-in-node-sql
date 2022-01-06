const department=require('../model/department_model')
module.exports.add_dep=async (name)=>{
   return await department.create({
        name:name
    })
}

module.exports.update_dep=async (id,name)=>{
   return await department.update({name:name},{where:{id:id}})
}
module.exports.show_dep=async ()=>{
    return await department.findAll()
}