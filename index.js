//instantiate express module
const express = require("express");

//create group-route
// after install group router
require("express-group-routes");

// init body-parser
const bodyParser = require("body-parser");

// use express in app variable
const app = express();
//define the server
const port = 5000;

// allow this app to recive incoming json request
app.use(bodyParser.json());

// import data the controllers
const TodosCoontroller = require("./controllers/todos");

app.group("/api/v1", router => {
  // todos api call the controller here in the callback
  router.get("/todos", TodosCoontroller.index);
  router.get("/todos/:id", TodosCoontroller.show);
  router.post("/todos", TodosCoontroller.store);
  router.delete("/todos/:id", TodosCoontroller.destroy);
});

// end import data the controllers

// make hardcode array of obj todos
const todos = [
  {
    id: 1,
    title: "walking with Lucinta",
    isDone: true
  },
  {
    id: 2,
    title: "walking with Lucinta",
    isDone: true
  },
  {
    id: 3,
    title: "walking with Lucinta",
    isDone: true
  }
];

// using group route

// app.group("/api/v1", router => {
//   // GET list route :simply send arr of obj todos on your user screen
//   router.get("/todos", (req, res) => {
//     res.send(todos);
//   });

//   // GET detail route: send the obj, by received id request params
//   router.get("/todos/:id", (req, res) => {
//     const id = req.params.id;
//     const index = id - 1;
//     res.send(todos[index]);
//   });

//   // POST route: receive json body request, from user input, then push to todos array
//   router.post("/todos", (req, res) => {
//     const data = req.body;
//     todos.push(data);
//     res.send(data);
//   });

//   // PATCH route: receive JSON body request from user input, then push to todos array
//   router.patch("/todos/:id", (req, res) => {
//     const id = req.params.id;
//     const index = id - 1;
//     const data = req.body;
//     todos[index] = { ...todos[index], ...data };
//     res.send(todos[index]);
//   });

//   // DELETE route: delete the todo obj, by received id request params
//   router.delete("/todos", (req, res) => {
//     const id = req.params.id;
//     const index = id - 1;
//     todos.slice(index, 1);
//     res.send(todos);
//   });
// });

// end using group route

// not using group route
// GET list route :simply send arr of obj todos on your user screen
// app.get("/todos", (req, res) => {
//   res.send(todos);
// });

// // GET detail route: send the obj, by received id request params
// app.get("/todos/:id", (req, res) => {
//   const id = req.params.id;
//   const index = id - 1;
//   res.send(todos[index]);
// });

// // POST route: receive json body request, from user input, then push to todos array
// app.post("/todos", (req, res) => {
//   const data = req.body;
//   todos.push(data);
//   res.send(data);
// });

// // PATCH route: receive JSON body request from user input, then push to todos array
// app.patch("/todos/:id", (req, res) => {
//   const id = req.params.id;
//   const index = id - 1;
//   const data = req.body;
//   todos[index] = { ...todos[index], ...data };
//   res.send(todos[index]);
// });

// // DELETE route: delete the todo obj, by received id request params
// app.delete("/todos", (req, res) => {
//   const id = req.params.id;
//   const index = id - 1;
//   todos.slice(index, 1);
//   res.send(todos);
// });

// end not using group route

// create the home page route
app.get("/", (req, res) => {
  // res means, response and it send string "hallo express!" to the api
  res.send("Helloo SepteHabudin");
});

// when this node js app executed, it will listen ti defined port
app.listen(port, () => console.log(`Listen port ${port} !`));
