const mongoose = require("mongoose");
const joi = require("joi");

function validateMessage(input){
    const schema = joi.object({
        email: joi.string().required().max(255).min(5),
        name: joi.string().required().max(255).min(2),
        message: joi.string()
    })
    return schema.validate(input)
}

const messageSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true,
        maxlength: 255,
        minlength: 5
    },
    name: {
        type: String,
        require: true,
        maxlength: 255,
        minlength: 2
    },
    message: {
        type: String,
        required: false
    }
})

const Message = new mongoose.model("Messages", messageSchema);

module.exports.Message = Message;
module.exports.validateMessage = validateMessage;
