const Router = require('express');
const path = require("path");
const router = new Router();

router.get('/resume-pdf', (req, res) => {
    res.sendFile(path.join(__dirname, "resume.pdf"))
})
// routes.post('/', SessionController.store);
// routes.put('/', SessionController.store);
// routes.delete('/', SessionController.store);

module.exports = router;