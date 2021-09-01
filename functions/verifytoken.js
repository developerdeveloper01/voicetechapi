const key = "verysecretkey";
const jwt = require("jsonwebtoken");

exports.verifyToken = (req, res, next) => {
  let token = req.headers["auth-token"];

  if (!token) {
    return res.status(403).send({ message: "No token provided!" });
  }

  jwt.verify(token, key, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "Unauthorized!" });
    }
    req.userId = decoded.userId;
    //req.usertype = decoded.usertype;
    next();
  });
};
