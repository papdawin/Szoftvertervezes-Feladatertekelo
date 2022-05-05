const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("asdasdasdasd");
});

app.post("/ataz", (req, res) => {
    res.status(200).json(req.body);
});

app.get("/time", (req, res) => {
    res.status(200).json(req.body);
});

app.post("/adat", (req, res) => {
    res.status(200).json(req.body);
});

app.post("/error", (req, res) => {
    res.status(400).json(req.body);
});

app.listen(5000);
