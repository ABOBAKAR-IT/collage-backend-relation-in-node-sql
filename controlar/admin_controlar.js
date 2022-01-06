const {
  createTable,
  updateTable,
  deletedata,
  allshow,
} = require("../services/services");

module.exports.hello = (req, res) => {
  res.send("hello world");
};
module.exports.add = (req, res) => {
  const name = req.body.name;
  const rollNo = req.body.rollNo;
  const clas = req.body.class;
  createTable(name, rollNo, clas)
    .then((data) => res.send(data))
    .catch((err) => res.send(err));
};
module.exports.update = (req, res) => {
  const id = req.body.id;
  const roll = req.body.rollNo;
  updateTable(id, roll)
    .then((data) => res.send(data))
    .catch((err) => res.send(err));
};
module.exports.deleted = async(req, res) => {
    const id = req.body.id;

  try {
      const delAdmin = await     deletedata(id)

      console.log(delAdmin)
      if(delAdmin)
      {
          res.send("deleted")
      }
      else{
        res.send("id not found")

      }

      
  } catch (error) {console.log(error)}
};

module.exports.all = (req, res) => {
  allshow()
    .then((data) => res.send(data))
    .catch((err) => res.send(err));
};
