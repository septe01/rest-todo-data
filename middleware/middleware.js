// middleware jusst add next in functions
const isLoggedIn = true;

//Dummy authenticated middleware
exports.authenticated = (req, res, next) => {
  if (isLoggedIn) next();
  else {
    res.send({
      message: "You are Unauthenticated!"
    });
  }
};

// In the next step we enter the file
// "middleware.js" into the file "index.js"
