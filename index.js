const express = require("express");
const app = express();
var cors = require("cors");
const port = 5000;
const name = require("./data/items-name.json");

app.use(cors());
app.get("/", (req, res) => {
  res.send(name);
});
app.get("/n", (req, res) => {
  res.send({ name: "Rakibul Hasan" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// git init
// git add
// git commit -m ""
// git branch -M main
// git remote add origin https://github.com/programming-hero-web-course1/b610-lerning-platform-server-side-Rakibul2580.git
// git push -u origin main
