const COURSE_STUDENT = require("../model/course_student");

module.exports.add=async(id)=>{
return await COURSE_STUDENT.create({
id:id
//tbStudentId:s_id,
//tbCourseId:c_id

})
}

module.exports.update=async(id,s_id,c_id)=>{
    return await COURSE_STUDENT.update({
       
        tbCourseId:c_id,
        tbStudentId:s_id
    },{where:{id:id}}
    )
 }
 
 
 module.exports.dlt=async(id)=>{
     return await COURSE_STUDENT.destroy({where:{id:id}})
 }
 module.exports.find=async()=>{
     return await COURSE_STUDENT.findAll()
 }



