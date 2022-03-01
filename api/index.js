const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

app.get("/", (req, res) => {
  console.log("Holaa");
  res.send("Hola mundo");
});

app.post("/login", (req, res) => {
  const user = {
    name: "Luis",
    correo: "blackkndd@gmail.com",
    password: 12345,
  };

  jwt.sign({ user }, "secretKey", { expiresIn: "1m" }, (err, token) => {
    res.json({
      token,
    });
  });
});

//Authorization: Bearer <token>
const verifyToken = (req, res, next) => {
  const bearerheader = req.headers["authorization"];
  if (typeof bearerheader !== "undefined") {
    const token = bearerheader.split(" ")[1];
    req.token = token;
    next();
  } else {
    res.sendStatus(403);
  }
};

app.post("/login/posts", verifyToken, (req, res) => {
  jwt.verify(req.token, "secretKey", (error, authData) => {
    if (error) {
      res.sendStatus(403);
    } else {
      res.json({ mensaje: "Post fué creado", authData });
    }
  });
});

app.listen(3000, () => {
  console.log("server on port 3000");
});
