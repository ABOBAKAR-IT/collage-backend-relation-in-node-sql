const COURSES = require("../model/courses_model");

module.exports.add=async(name)=>{
return await COURSES.create({
    name:name
})
}

module.exports.update=async(id,name)=>{
   return await COURSES.update({
       name:name},{where:{id:id}}
   )
}

module.exports.dlt=async(id)=>{
    return await COURSES.destroy({where:{id:id}})
}
module.exports.find=async()=>{
    return await COURSES.findAll()
}