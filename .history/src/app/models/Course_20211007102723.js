const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const Course = new Schema({
    name: { type: String, maxLength: 255 },
    description: String,
    img: String,
    date: { type: Date, default: Date.now },
});