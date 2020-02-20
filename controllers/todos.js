// using database
//impor connection
// const connection = require("../koneksi/db");
const Todo = require("../models").todo;

exports.index = (req, res) => {
  Todo.findAll().then(todos => res.send(todos));
};

exports.show = (req, res) => {
  Todo.findOne({ where: { id: req.params.id } }).then(todo => {
    if (todo != null) {
      res.status(200).send({
        status: 200,
        message: "success",
        todo
      });
    } else {
      res.status(404).send({
        status: 404,
        message: "not founds"
      });
    }
  });
};

exports.store = (req, res) => {
  const { title, is_done, created_by } = req.body;
  Todo.create({
    title: title,
    is_done: is_done,
    created_by: created_by
  }).then(data => {
    if (data != null) {
      res.status(200).send({
        status: 200,
        message: "success",
        data
      });
    } else {
      res.status(404).send({
        status: 404,
        message: "failed"
      });
    }
  });
};

exports.update = (req, res) => {
  const { title, is_done, created_by } = req.body;
  Todo.update(
    {
      title: title,
      is_done: is_done,
      created_by: created_by
    },
    {
      where: { id: req.params.id }
    }
  ).then(data => {
    if (data != 0) {
      res.status(200).send({
        status: 200,
        message: "success",
        data
      });
    } else {
      res.status(404).send({
        status: 404,
        message: "failed"
      });
    }
  });
};

exports.destroy = (req, res) => {
  Todo.findOne({ where: { id: req.params.id } }).then(todo => {
    if (todo != null) {
      Todo.destroy({ where: { id: req.params.id } }).then(todos => {
        res.send({
          status: 200,
          message: "success"
        });
      });
    } else {
      res.status(404).send({
        status: 404,
        message: "not founds"
      });
    }
  });
};

// using query kompensional
// exports.index = (req, res) => {
//   connection.query("SELECT * FROM todos", (err, rows) => {
//     if (err) throw err;

//     res.send({
//       status: "200",
//       message: "success",
//       rows
//     });
//   });
// };

// exports.show = (req, res) => {
//   const id = req.params.id;
//   connection.query(`SELECT * FROM todos WHERE id=${id}`, (err, rows) => {
//     if (err) throw err;
//     res.send({
//       status: "200",
//       message: "success",
//       rows
//     });
//   });
// };

// exports.store = (req, res) => {
//   const { title, isDone } = req.body;

//   connection.query(
//     `INSERT INTO todos (title, isDone) VALUES('${title}', '${isDone}')`,
//     err => {
//       if (err) throw err;
//     }
//   );
//   res.send({ status: "200", success: true, data: req.body });

//   // res.send(req.body);
// };

// exports.update = (req, res) => {
//   const { title, isDone } = req.body;

//   connection.query(
//     `UPDATE todos SET title = '${title}',isDone = '${isDone}' WHERE id = ${req.params.id}`,
//     (err, data) => {
//       if (err) throw err;

//       if (data.affectedRows == 1) {
//         res.send({ status: "200", success: true, data: req.body });
//       } else {
//         res.send({ status: "404", success: false });
//       }
//     }
//   );
// };

// exports.destroy = (req, res) => {
//   connection.query(
//     `DELETE FROM todos WHERE id='${req.params.id}'`,
//     (err, data) => {
//       if (err) throw err;
//       if (data.affectedRows == 1) {
//         res.send({ status: "200", success: true });
//       } else {
//         res.send({ status: "404", success: false });
//       }
//     }
//   );
// };

// end using query kompensional

// const todos = [
//   {
//     id: 1,
//     title: "Walking with Lucinta",
//     isDone: true
//   },
//   {
//     id: 2,
//     title: "Walking with Desi",
//     isDone: true
//   },
//   {
//     id: 3,
//     title: "Walking with Putri",
//     isDone: true
//   }
// ];

// manual data

// exports.index = (req, res) => {
//   res.send({
//     status: "200",
//     message: "show data",
//     todos
//   });
// };

// exports.show = (req, res) => {
//   const id = req.params.id;
//   const index = id - 1;
//   res.send({
//     status: "200",
//     message: "success",
//     todos: todos[index]
//   });
// };

// exports.store = (req, res) => {
//   const data = req.body;
//   todos.push(data);
//   res.send({
//     status: "200",
//     message: "inserted",
//     todos
//   });
// };

// exports.update = (req, res) => {
//   const id = req.params.id;
//   const index = id - 1;
//   const data = req.body;
//   todos[index] = { ...todos[index], ...data };
//   res.send({
//     status: "200",
//     message: "updated",
//     todos
//   });
// };

// exports.destroy = (req, res) => {
//   const id = req.params.id;
//   const index = id - 1;
//   const data = todos.slice(index, 1);
//   res.send(data);
// };

// end manual data
