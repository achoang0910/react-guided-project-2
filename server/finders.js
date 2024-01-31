const { client } = require("./database.js");
const characters = client.db().collection("characters");
const planets = client.db().collection("planets");
const films = client.db().collection("films");

/*==================== CHARACTERS ====================*/
module.exports.getCharacters = (req, res) => {
  let data = characters.find({}).toArray();
  data
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(501).send({ alert: "Error getting all characters" }, err);
    });
};

module.exports.getCharacter = (req, res) => {
  let data = characters.findOne({ "id": Number(req.params.id) });
  data
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res
        .status(501)
        .send({ alert: `Error getting character with id ${id}` }, err);
    });
};

/*==================== CHARACTERS ====================*/
module.exports.getPlanets = (req, res) => {
  let data = planets.find({}).toArray();
  data
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(501).send({ alert: "Error getting all planets" }, err);
    });
};

module.exports.getPlanet = (req, res) => {
  let data = planets.findOne({ "id": Number(req.params.id) });
  data
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res
        .status(501)
        .send({ alert: `Error getting Planet with id ${id}` }, err);
    });
};

/*==================== FILMS ====================*/
module.exports.getFilms = (req, res) => {
  let data = films.find({}).toArray();
  data
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(501).send({ alert: "Error getting all films" }, err);
    });
};

module.exports.getFilm = (req, res) => {
  let data = films.findOne({ "id": Number(req.params.id) });
  data
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res
        .status(501)
        .send({ alert: `Error getting film with id ${id}` }, err);
    });
};
