const Router = require('express');
const path = require("path");
// const gameClass = require("./gameClass.txt")

// import all controllers
// import SessionController from './app/controllers/SessionController';

const router = new Router();

// Add routes
// routes.get('/', SessionController.store);
router.get("/game-class", (req, res)=> {
    res.sendFile(path.join(__dirname, 'gameClass.txt'))
})
// routes.post('/', SessionController.store);
// routes.put('/', SessionController.store);
// routes.delete('/', SessionController.store);

module.exports = router;
