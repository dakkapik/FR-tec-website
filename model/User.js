const mongoose = require("mongoose")
const joi = require("joi");

function validateMessage(input){
    const schema = joi.object({
        fname: joi.string().required(),
        lname: joi.string().required(),
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
    fname: {
        type: String,
        require: true,
        maxlength: 50,
        minlength: 2
    },
    lname: {
        type: String,
        require: true,
        maxlength: 50,
        minlength: 2
    }
})

const Message = new mongoose.model("Messages", messageSchema);

module.exports.Message = Message;
module.exports.validateMessage = validateMessage;
