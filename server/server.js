const express = require("express");
const dao = require("./mongo-dao.js");
const app = express();

app.use(express.json()); //Parse JSON body
/*
app.get("/api/characters", function (req, res) {
  let character = dao.findAllCharacters(req.body);

  if (character === undefined) {
    res.statusCode = 404;
    res.end();
  } else {
    res.send(character);
  }
});*/

app.get("/books", (req, res) => {
  dao.findAllCharacters(function (data) {
    res.send(data);
  });
});

app.listen(3000, () => console.log("Example app listening on port 3000!"));
