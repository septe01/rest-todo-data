// using database
//impor connection
const connection = require("../koneksi/db");

exports.index = (req, res) => {
  connection.query("SELECT * FROM todos", (err, rows) => {
    if (err) throw err;

    res.send({
      status: "200",
      message: "success",
      rows
    });
  });
};

exports.show = (req, res) => {
  const id = req.params.id;
  connection.query(`SELECT * FROM todos WHERE id=${id}`, (err, rows) => {
    if (err) throw err;
    res.send({
      status: "200",
      message: "success",
      rows
    });
  });
};

exports.store = (req, res) => {
  const { title, isDone } = req.body;

  connection.query(
    `INSERT INTO todos (title, isDone) VALUES('${title}', '${isDone}')`,
    err => {
      if (err) throw err;
    }
  );
  res.send({ status: "200", success: true, data: req.body });

  // res.send(req.body);
};

exports.update = (req, res) => {
  const { title, isDone } = req.body;

  connection.query(
    `UPDATE todos SET title = '${title}',isDone = '${isDone}' WHERE id = ${req.params.id}`,
    (err, data) => {
      if (err) throw err;

      if (data.affectedRows == 1) {
        res.send({ status: "200", success: true, data: req.body });
      } else {
        res.send({ status: "404", success: false });
      }
    }
  );
};

exports.destroy = (req, res) => {
  connection.query(
    `DELETE FROM todos WHERE id='${req.params.id}'`,
    (err, data) => {
      if (err) throw err;
      if (data.affectedRows == 1) {
        res.send({ status: "200", success: true });
      } else {
        res.send({ status: "404", success: false });
      }
    }
  );
};

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
