const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Igen");
});

app.post("/", (req, res) => {
    res.send(req.body);
});

app.get("/time", (req, res) => {
    res.send(new Date().toLocaleString());
});

app.post("/error", (req, res) => {
    res.status(404).json(req.body);
});

app.listen(5000);
