const todos = [
  {
    id: 1,
    title: "Walking with Lucinta",
    isDone: true
  },
  {
    id: 2,
    title: "Walking with Desi",
    isDone: true
  },
  {
    id: 3,
    title: "Walking with Putri",
    isDone: true
  }
];

exports.index = (req, res) => {
  res.send({
    status: "200",
    message: "show data",
    todos
  });
};

exports.show = (req, res) => {
  const id = req.params.id;
  const index = id - 1;
  res.send({
    status: "200",
    message: "success",
    todos: todos[index]
  });
};

exports.store = (req, res) => {
  const data = req.body;
  todos.push(data);
  res.send({
    status: "200",
    message: "inserted",
    todos
  });
};

exports.update = (req, res) => {
  const id = req.params.id;
  const index = id - 1;
  const data = req.body;
  todos[index] = { ...todos[index], ...data };
  res.send({
    status: "200",
    message: "updated",
    todos
  });
};

exports.destroy = (req, res) => {
  const id = req.params.id;
  const index = id - 1;
  const data = todos.slice(index, 1);
  res.send(data);
};
