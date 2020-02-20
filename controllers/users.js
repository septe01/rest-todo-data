const Todo = require("../models").user;

// exports.index = (req, res) => {
//   Todo.findAll().then(todos => res.send(todos));
// };

// exports.show = (req, res) => {
//   Todo.findOne({ where: { id: req.params.id } }).then(todo => {
//     if (todo != null) {
//       res.status(200).send({
//         status: 200,
//         message: "success",
//         todo
//       });
//     } else {
//       res.status(404).send({
//         status: 404,
//         message: "not founds"
//       });
//     }
//   });
// };
