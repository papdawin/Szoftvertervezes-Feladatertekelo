const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("asd");
});

app.post("/adat", (req, res) => {
    res.json(req.body);
});

app.get("/time", (req, res) => {
    res.json({ datum: Date.now() });
});

app.post("/error", (req, res) => {
    res.status(404).json({ msg: "hiba baszki" });
});

app.listen(5000);
