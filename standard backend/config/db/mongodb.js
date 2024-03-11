const mongoose = require("mongoose")

async function connectToMongoDB(){
    try{
        await mongoose.connect("mongodb://0.0.0.0:27017")
        console.log("Database connected at 27017")
    }catch (e) {
        console.log(e)
    }
}

module.exports = connectToMongoDB
