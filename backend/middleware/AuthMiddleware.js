const jwt = require("jsonwebtoken");
const User = require("../models/UserModel");

const AuthMiddleware = async (req, res, next) => {
  //verify that the user is authenticated
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: "Authorization token required" });
  }

  //authorization format = 'Bearer dflhoifjsdgeo.27687632.zd82rt'
  const token = authorization.split(" ")[1];

  try {
    const { _id } = jwt.verify(token, process.env.JWT_SECRET);
    //attaching the user property to the request
    req.user = await User.findOne({ _id }).select("_id");
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: "Request is not authorized!" });
  }
};

module.exports = AuthMiddleware;
