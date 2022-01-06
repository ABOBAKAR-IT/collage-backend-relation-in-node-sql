const { add, update, find, dlt } = require("../services/courses_services");

module.exports.add=(req,res)=>{
    const name=req.body.name;
add(name).then(data=>res.send(data)).catch(err=>res.send(err))
}
module.exports.update=(req,res)=>{
    const name=req.body.name;
    const id=req.body.id;
    update(id,name).then(data=>res.send(data)).catch(err=>res.send(err))
}
module.exports.dlt=async(req,res)=>{
    const id=req.body.id;
try {
    const result=await dlt(id)
    if(result)
    res.send("data delete")
    else
    res.send('not found')
} catch (error) {
    console.log(error);
}

   // dlt(id).then(data=>res.send(data)).catch(err=>res.send(err))
}
module.exports.find=(req,res)=>{
    find().then(data=>res.send(data)).catch(err=>res.send(err))
}