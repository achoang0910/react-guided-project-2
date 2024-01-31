const { characters, planets, films } = require("./database.js");

exports.getCharacters = (req, res) => {
  characters
    .find({})
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(501).send({ alert: "Error getting all characters" }, err);
    });
};

exports.getCharacter = (req, res) => {
  characters
    .findOne(req.params.id)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res
        .status(501)
        .send({ alert: `Error getting character with id ${id}` }, err);
    });
};
