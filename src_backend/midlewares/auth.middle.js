const jwt = require("jsonwebtoken");
const User = require('../models/user.model');

verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({ message: "Não está autenticado" });
  }

  jwt.verify(token, process.env.JWT_PRIVATE_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "Token invalido" });
    }
    req.userId = decoded.id;
    next();
  });
};

isAdmin = (req, res, next) => {
  User.findById(req.userId).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    if (user.isAdmin) {
        next();
        return;
    } else {
        res.status(403).send({ message: "Acesso não autorizado" });
        return;
    }
  });
};

const authMiddle = {
    verifyToken,
    isAdmin,
  };

  module.exports = authMiddle;