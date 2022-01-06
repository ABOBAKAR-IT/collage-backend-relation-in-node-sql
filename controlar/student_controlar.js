const { add, update, dtl, find, findone } = require("../services/student_services");

module.exports.add=(req,res)=>{
    const fn=req.body.firstName;
    const ln=req.body.lastName;
    const ph=req.body.phone;
 add(fn,ln,ph).then(data=>res.send(data)).catch(err=>res.send(err))
}
module.exports.update=(req,res)=>{
    const id=req.body.id;
    const fn=req.body.firstName;
    const ln=req.body.lastName;
    const ph=req.body.phone;
   update(id,fn,ln,ph).then(data=>res.send(data)).catch(err=>res.send(err))
}
module.exports.dlete=async(req,res)=>{
    const id=req.body.id;
    try {
        const data= await dtl(id)
        if(data)
        res.send('data delete')
        else
        res.send('not found')
    } catch (error) {
        console.log(error);
    }
  // dtl(id).then(data=>res.send(data)).catch(err=>res.send(err))
}
module.exports.findall=(req,res)=>{
   find().then(data=>res.send(data)).catch(err=>res.send(err))
}
module.exports.findone=(req,res)=>{
    const id=req.body.id;
    findone(id).then(data=>res.send(data)).catch(err=>res.send(err))
}

module.exports.findone = (req, res) => {
    const id = req.body.id;
    findone(id)
      .then((data) => res.send(data))
      .catch((err) => res.send(err));
  };