const express = require("express");
const finders = require("./finders.js");
const app = express();

app.use(express.json()); //Parse JSON body

/*==================== SET UP ROUTES HERE ====================*/
app.get("/", (req, res) => res.send("Server is running"));
app.get("/characters", finders.getCharacters);
app.get("/characters/:id", finders.getCharacter);
app.get("/planets", finders.getPlanets);
app.get("/planets/:id", finders.getPlanet);
app.get("/films", finders.getFilms);
app.get("/films/:id", finders.getFilm);

/*==================== SET UP PORT HERE ====================*/
const port = 3000;
console.log(
  "Open a browser to http://localhost:" + port + " to view the application"
);
app.listen(port);
