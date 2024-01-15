const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  const token = req.header("x-auth-token");
  if (!token) {
    return res.status(401).send("Access denied. No Token Provided");
  }
  try {
    const decode = jwt.verify(token, "jwtPrivateKey");
    req.user = decode;
    next();
  } catch (error) {
    return res.status(400).send("Invallid Token");
  }
}

module.exports = auth;