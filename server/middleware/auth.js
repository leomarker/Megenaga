const jwt = require("jsonwebtoken");

exports.verifytoken = (req, res, next) => {
  try {
    let token = req.header("Authorization");
    const secret = "this is jwt";
    if (!token) {
      return res.redirect("/api/login");
    }
    if (token.startsWith("Bearer ")) {
      token = token.slice(7, token.length).trimLeft();
    }
    const verify = jwt.verify(token, secret);
    req.use = verify;
    next();
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};
