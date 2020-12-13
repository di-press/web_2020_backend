const jwt = require("jsonwebtoken");
const User = require('../models/user.model');

verifyToken = (req, res, next) => {
  console.log(req)
  console.log('token eh')
  let token = req.headers['x-access-token'];
  console.log(token)
  if (!token) {
    return res.status(403).send({ message: "Não está autenticado" });
  }

  jwt.verify(token, process.env.JWT_PRIVATE_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "Token invalido" });
    }
    req.userId = decoded.userId;
    //console.log(decoded)
    next();
  });
};

 isAdmin = async (req, res, next) => {
  console.log(req.userId)
  const user = await User.findOne({_id: req.userId})
  if (user && user.isAdmin) {
    next();
    return
  } else {
    res.status(403).send({ message: "Acesso não autorizado" });
    return;
  }
}


const authMiddle = {
    verifyToken,
    isAdmin,
  };

  module.exports = authMiddle;