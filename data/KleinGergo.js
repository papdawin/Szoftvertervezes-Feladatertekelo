const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Tetszőleges");
});
//app.post("/adat", (req, res) => { //Én kommenteztem ki, nem működne a teszt(amúgy hibás)
//    req.body
//});
app.get("/time", (req, res) => {
    res.status(200).json(Date.now());
});
app.post("/error", (req, res) => {
    res.status(404).send("Hiba");
});

app.listen(5000);
