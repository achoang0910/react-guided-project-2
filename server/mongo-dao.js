const mongodb = require("mongodb"); // mongo client library
const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const dbName = "swapi";
const collectionName = "characters";
let collection;

async function startup() {
    let client = new MongoClient(url);
    await client.connect();
    var db = client.db(dbName)
    collection = db.collection(collectionName);
}
startup();

// retrieve all characters
module.exports.findAllCharacters = function (callback) {
    let dataPromise = collection.find({}).toArray();
    dataPromise.then((characters) => callback(characters));
};

// retrieve a single character
module.exports.findCharacter = function (id, callback) {
    let dataPromise = collection.findOne({ "id": id });
    dataPromise.then((character) => callback(character));
};
