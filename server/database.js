const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017/swapi";
const client = new MongoClient(url);

/*
const dbName = "swapi";
const collectionName = "characters";
let collection;
*/

async function connectToMongoDB() {
  await client.connect();
}

connectToMongoDB();

module.exports = { client };
