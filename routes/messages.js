const {Message, validateMessage} = require("../model/Message")
const router =  new require('express').Router()

router.post("/", async (req, res) => {
    
    const { error } = validateMessage(req.body)
    if(error) return res.status(400).send(`${error.details[0].message}`)

    const message = new Message({
        email: req.body.email,
        name: req.body.name,
        message: req.body.message
    })

    await message.save();

    res.status(200).send("Thank you for the message, I will reply as soon as posible.")
})

router.get("/", async(req, res) => {
    const messages = await Message.find().sort("date")
    res.status(200).send(messages)
})


module.exports = router;