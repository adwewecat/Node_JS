const mongoose = require("mongoose");

async function connect() {
    try {
        await mongoose.connect("mongodb://localhost:27017/my_database", {
            useNewUrlParser: true,
            useUnìiedTopology: true
        });
    } catch (error) {

    }

}

module.exports = { connect };