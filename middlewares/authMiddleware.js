const jwt = require("jsonwebtoken");
const config = require("../config/config");

const auth = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({
      status: 401,
      code: "E_UNAUTHORIZED",
      message: "Jwt token is missing in request",
    });
  }
  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  try {
    console.log("config.jwtSecret", config.jwtSecret);
    const decoded = jwt.verify(token, config.jwtSecret);
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};

module.exports = auth;
