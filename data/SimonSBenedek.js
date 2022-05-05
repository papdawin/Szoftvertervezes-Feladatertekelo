const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("dsasad");
});

app.get("/time", (req, res) => {
    res.send(new Date().toLocaleString());
});

app.post("/adat", (req, res) => {
    res.status(200).json(req.body);
});

app.post("/error", (req, res) => {
    res.status(400).json(req.body);
});

app.listen(5000);
