const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Ez egy tetszőleges üzenet");
});

app.post("/adat", (req, res) => {
    res.status(200).json(req.body);
});

app.get("/time", (req, res) => {
    res.send(new Date().toLocaleString());
});

app.post("/error", (req, status) => {
    res.status(404).json(req.body);
});

app.listen(5000);
