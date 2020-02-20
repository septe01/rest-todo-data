const User = require("../models").user;
const jwt = require("jsonwebtoken");

exports.login = (req, res) => {
  // , password: req.body.password
  // console.log(req.body.email);
  User.findOne({
    where: { email: req.body.email }
  }).then(dateEmail => {
    if (dateEmail == null) {
      res.send({
        status: 404,
        message: "email not found !"
      });
    } else {
      User.findOne({ password: req.body.password }).then(dataPassword => {
        if (dataPassword != null) {
          // res.send(dataPassword.password);
          // res.send(dataPassword);
          const token = jwt.sign(
            { userId: dataPassword.password },
            "my-secret-key"
          );
          res.send({
            status: "200",
            message: "success",
            token
          });
        }
      });
    }
  });
};
