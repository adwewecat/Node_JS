const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const Course = new Schema({
    name: { type: String, },
    description: String,
    img: String,
    createdAt: { type: Date, default: Date.now },
    updateddAt: { type: Date, default: Date.now },
});


module.exports = mongoose.model('Course', Course)