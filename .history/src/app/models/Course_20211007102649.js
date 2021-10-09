const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const Course = new Schema({
    name: { type: String, maxLength: 255 },
    body: String,
    date: Date,
    date: { type: Date, default: Date.now },
});