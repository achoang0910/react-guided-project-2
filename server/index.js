const express = require("express");
const dao = require("./mongo-dao.js");
const finders = require("./finders.js");
const app = express();

app.use(express.json()); //Parse JSON body

app.get("/", (req, res) => res.send("Server is running"));
app.get("/characters", finders.getCharacters);
app.get("/characters/:id", finders.getCharacter);

app.listen(3000, () => console.log("Example app listening on port 3000!"));
/*
// get all characters
app.get("/api/characters", (req, res) => {
    dao.findAllCharacters(
        (characters) => {
            if (!characters) {
                res.status(404).end();
            } else {
                res.send(characters);
            }
        })
});

//get one character
app.get("/api/characters/:id", (req, res) => {
    const idNum = Number(req.params.id);
    dao.findCharacter(idNum,
        (character) => {
            if (!character) {
                res.status(404).end();
            } else {
                res.send(character);
            }
        })
});
*/
/* =======================SET UP ROUTES HERE ============================ */
