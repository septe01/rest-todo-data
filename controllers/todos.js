// using database
//impor connection
// const connection = require("../koneksi/db");
const Todo = require("../models").todo;

exports.index = (req, res) => {
  Todo.findAll().then(todos => res.send(todos)); //sequlize orm
};

exports.show = (req, res) => {
  Todo.findOne({ where: { id: req.params.id } }).then(todo => {
    //sequlize orm
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
    //sequlize orm
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
    //sequlize orm
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
    //sequlize orm
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
