const {
  add_Ins,
  update_Ins,
  delete_Ins,
  find_all_Ins,
  find_one_Ins,
} = require("../services/instructer_services");

module.exports.add = (req, res) => {
  const fn = req.body.firstName;
  const ln = req.body.lastName;
  const ph = req.body.phone;
  add_Ins(fn, ln, ph)
    .then((data) => res.send(data))
    .catch((err) => res.send(err));
};
module.exports.update = (req, res) => {
  const id = req.body.id;
  const fn = req.body.firstName;
  const ln = req.body.lastName;
  const ph = req.body.phone;
  update_Ins(id, fn, ln, ph)
    .then((data) => res.send(data))
    .catch((err) => res.send(err));
};
module.exports.dlete = async (req, res) => {
  const id = req.body.id;

  try {
    const result = await delete_Ins(id);
    if (result) {
      res.send("deleted");
    } else {
      res.send("not found");
    }
    console.log(result);
    //    res.send(result)
  } catch (error) {
    console.log(error);
    // res.send(error)
  } 

  // delete_Ins(id).then(data=>res.send(data)).catch(err=>res.send(err))
};
module.exports.findall = (req, res) => {
  find_all_Ins()
    .then((data) => res.send(data))
    .catch((err) => res.send(err));
};
module.exports.findone = (req, res) => {
  const id = req.body.id;
  find_one_Ins(id)
    .then((data) => res.send(data))
    .catch((err) => res.send(err));
};
