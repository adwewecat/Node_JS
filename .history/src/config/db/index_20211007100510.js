const mongoose = require("mongoose");

async function connect() {
    try {
        await mongoose.connect("mongodb://localhost:27017/f8_education_dev", {
            useNewUrlParser: true,
            useUnìiedTopology: true
        });
        console.log('Connect Successfully')
    } catch (error) {
        console.log("Connect Failue!!!");
    }

}

module.exports = { connect };