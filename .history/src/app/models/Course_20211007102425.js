const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const Course = new Schema({
    title: String,
    body: String,
    date: Date,
});