const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const fs = require("fs");
const path = require("path");
const favicon = require('express-favicon');
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const POST_DIR = "./f/public/posts"
const cors = require("cors");

app.use(favicon(__dirname + '/f/build/logo-fr-tec.png'));
app.use(cors());
app.use(express.static(path.join(__dirname, "/public")));

app.get("/posts", async (req, res) => {
  const postDir = "./public/posts"
  if(!fs.existsSync(postDir)) fs.mkdirSync(postDir);

  const postsNames = fs.readdirSync(postDir);
  const posts = [];

  postsNames.forEach(postName => {
    posts.push(JSON.parse(fs.readFileSync(postDir + "/" + postName)))
  })

  res.send(posts);
})

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.post("/", (req, res) => {
  if(!fs.existsSync(POST_DIR)) fs.mkdirSync(POST_DIR);

  fs.writeFileSync(POST_DIR + "/" + req.body.title + ".json", JSON.stringify(req.body, null, 2))

  res.sendStatus(200)
})

app.post("/many", (req,res) => {
  if(!fs.existsSync(POST_DIR)) fs.mkdirSync(POST_DIR);
  const post = fs.readdirSync(POST_DIR)
  req.body.forEach((post, index) => {
    fs.writeFileSync(POST_DIR + "/" + req.body.title + ".json", JSON.stringify(req.body, null, 2))
});



})

app.listen(port, () => console.log("listening: ", port));




// const path = require('path');
// const entry = require("./entry")


