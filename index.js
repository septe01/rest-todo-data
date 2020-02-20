//instantiate express module
const express = require("express");

//create group-route
// after install group router
require("express-group-routes");

// init body-parser
const bodyParser = require("body-parser");

//middleware
const { authenticated } = require("./middleware/middleware");
//login middleware jwt
// const { AuthController } = require("./controllers/auth");

// use express in app variable
const app = express();
//define the server
const port = 5000;

// allow this app to recive incoming json request
app.use(bodyParser.json());

// import data the controllers
const TodosCoontroller = require("./controllers/todos");
const UserssCoontroller = require("./controllers/auth");

// login
app.group("/login", router => {
  router.post("/", UserssCoontroller.login);
});

app.group("/api/v1", router => {
  // todos api call the controller here in the callback
  router.get("/todos", authenticated, TodosCoontroller.index);
  router.post("/todos", authenticated, TodosCoontroller.store);
  router.get("/todos/:id", authenticated, TodosCoontroller.show);
  router.patch("/todos/:id", authenticated, TodosCoontroller.update);
  router.delete("/todos/:id", authenticated, TodosCoontroller.destroy);
});

// when this node js app executed, it will listen ti defined port
app.listen(port, () => console.log(`Listen port ${port} !`));
