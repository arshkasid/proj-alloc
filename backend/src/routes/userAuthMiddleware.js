const jwt = require("jsonwebtoken");
require("dotenv").config();

const userAuthMiddleware = (req, res, next) => {
  //take jwt token, decode it and check if it is right, if right, then put req.regno = regno and next()

  const headerToken = req.headers.authorization;

  if (!headerToken || !headerToken.startsWith("Bearer ")) {
    return res.status(400).json({
      message: "invalid token",
    });
  }

  const token = headerToken.split(" ")[1]; //first index of the split token string "Bearer skncbsjchs"

  const data = jwt.decode(token, process.env.USER_KEY);

  if (data == null) {
    return res.status(401).json({
      message: "invalid JWT token",
    });
  }

  req.regno = data.regno;
  next();
};

module.exports = { userAuthMiddleware };
