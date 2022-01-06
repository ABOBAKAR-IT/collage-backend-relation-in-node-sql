
const {add_dep, update_dep, show_dep} = require("../services/department_services");
const {response} = require("express");
module.exports.add=(req,res)=>{
    const n=req.body.name;
    add_dep(n).then(data=>res.send(data)).catch(err=>res.send(err))
}
module.exports.update=(req,res)=>{
    const id=req.body.id;
    const n=req.body.name;
    update_dep(id,n).then(data=>res.send(data)).catch(err=>res.send(err))
}
module.exports.show=(req,res)=>{
show_dep().then(data=>res.send(data)).catch(err=>res.send(err))
}
