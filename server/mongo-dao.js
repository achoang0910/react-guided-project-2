const mongodb = require("mongodb"); // mongo client library
const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017/swapi/characters";
const dbName = "StarWarsCharacters";
const collectionName = "Characters";
let collection;


async function startup() {
  let client = new MongoClient(url);
  await client.connect();
  var db = client.db(dbName);
  collection = db.collection(collectionName);
}
startup();

// retrieve all books
module.exports.findAllCharacters = function (callback) {
  textData = "response from findAllCharacters";
  callback(textData);
};

// retrieve a single book
module.exports.findCharacter = function (id, callback) {
  let dataPromise = collection.findOne({ id: id });
  dataPromise.then((character) => callback(character));
};
