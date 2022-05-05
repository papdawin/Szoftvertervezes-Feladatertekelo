const express = require("express");
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
    res.send("asd");
});
app.post("/adat", (req, res) => {
    res.status(200).json(req.body);
});
app.get("/time", (req, res) => {
    res.status(200).send(Date.now());
});
app.post("/error", (req, res) => {
    res.status(404).json(req.body);
});
app.listen(5000);
