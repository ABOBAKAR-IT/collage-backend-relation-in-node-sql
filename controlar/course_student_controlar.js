const { add, update, dlt, find } = require("../services/course_student_services");

module.exports.add=(req,res)=>{
  const id=req.body.id;
    //const sId=req.body.tbStudentId;
    //const cId=req.body.tbCourseId;
    add(id).then(data=>res.send(data)).catch(err=>res.send(err))
}

module.exports.update=(req,res)=>{
    const id=req.body.id;
    const sId=req.body.tbStudentId;
    const cId=req.body.tbCourseId;
    
update(id,sId,cId).then(data=>res.send(data)).catch(err=>res.send(err))
}
module.exports.dlt=async(req,res)=>{
    const id=req.body.id;
const data= await dlt(id)
try {
    if(data)
    res.send(data)
    else
    res.send(data)
} catch (error) {
    console.log(error);
}
  
}
module.exports.find=(req,res)=>{
    find().then(data=>res.send(data)).catch(err=>res.send(err))
}