const mongoose = require("mongoose");

async function connect() {
    try {
        await mongoose.connect("mongodb://localhost/my_database");
    } catch (error) {

    }

}

module.exports = { connect };