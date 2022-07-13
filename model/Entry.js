const mongoose = require("mongoose");

const entrySchema = new mongoose.Schema({
    title: {
        type: String,
        require : true,
        maxlength: 255,
        minlength: 2
    },
    entry: {
        type: String,
        require : true,
        maxlength: 255,
        minlength: 2
    },
    src: {
        type: String,
        require: false
    }
})

const Entry = new mongoose.model("Entry", entrySchema);

module.exports.Entry = Entry;

