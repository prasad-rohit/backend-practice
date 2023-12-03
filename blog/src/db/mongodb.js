const { MongoClient } = require("mongodb")

const client = new MongoClient("mongodb://localhost:27017")

try{
    await client.connect();
}catch (e) {
    console.log(e);
}finally {
    await client.close();
}

module.exports = client;
