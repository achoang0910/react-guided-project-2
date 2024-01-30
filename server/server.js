import express from 'express';


const dao = require("./data_access");

const app = express();

app.use(express.json()); //Parse JSON body 

app.get("/api/films", function (req, res) {
    let book = dao.findBook(req.params.isbn);

    if (book === undefined) {
        res.statusCode = 404;
        res.end();
    } else {
        res.send(book);
    }
});

app.listen(3000, () =>
    console.log('Example app listening on port 3000!'),
);