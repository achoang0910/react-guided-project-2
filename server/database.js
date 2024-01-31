const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017/swapi";
const client = new MongoClient(url);
let characters, planets, films;
/*
const dbName = "swapi";
const collectionName = "characters";
let collection;
*/

async function connectToMongoDB() {
  await client.connect();
  charactersPromise = client.db().collection("characters");
  planetsPromise = client.db().collection("planets");
  filmsPromise = client.db().collection("films");
}

connectToMongoDB();

module.exports = {
  client,
  characters: () => charactersPromise,
  planets: () => planetsPromise,
  films: () => filmsPromise,
};
