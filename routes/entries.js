const express = require('express');
const router = express.Router();

const { Entry } = require("../model/Entry");

router.post('/', (req, res) => {
  if(req.headers.x_psw === process.env.PASSWORD){

    const entry = new Entry({
      title: req.body.title,
      entry: req.body.entry,
      src: req.body.src
    })
  
    entry.save()
    .then(()=> res.send(entry))
    .catch((err) => res.send(err))
    
  } else {

    res.send("ACCESS DENIED").sendStatus(401)

  }
})

router.get('/', (req, res) => {
  Entry.find()
  .then(result => res.send(result))
  .catch(err => res.send(err))
})

module.exports = router;


















// router.get("/posts", async (req, res) => {
//     const postDir = "./posts"
//     if(!fs.existsSync(postDir)) fs.mkdirSync(postDir);
  
//     const postsNames = fs.readdirSync(postDir);
//     const posts = [];
  
//     postsNames.forEach(postName => {
//       posts.push(JSON.parse(fs.readFileSync(postDir + "/" + postName)))
//     })
  
//     res.send(posts);
// })

/* 
router.post("/post", (req, res) => {
    const POST_DIR = "./f/public/posts"
    if(!fs.existsSync(POST_DIR)) fs.mkdirSync(POST_DIR);

    fs.writeFileSync(POST_DIR + "/" + req.body.title + ".json", JSON.stringify(req.body, null, 2))

    res.sendStatus(200)
})
*/

// router.post("/message", (req, res) => {
//     const MESSAGE_DIR = "./messages"
//     if(!fs.existsSync(MESSAGE_DIR)) fs.mkdirSync(MESSAGE_DIR);

//     fs.writeFileSync(path.join(MESSAGE_DIR , Date.now().toString() + ".json"), JSON.stringify(req.body, null, 2))

//     res.sendStatus(200);
// })

/*
router.post("/many", (req,res) => {
  if(!fs.existsSync(POST_DIR)) fs.mkdirSync(POST_DIR);
  const post = fs.readdirSync(POST_DIR)
  req.body.forEach((post, index) => fs.writeFileSync(POST_DIR + "/" + req.body.title + ".json", JSON.stringify(req.body, null, 2)));
})
*/
  
