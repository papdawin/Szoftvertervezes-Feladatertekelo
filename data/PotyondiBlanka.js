const express = require("express");
const app = express();

app.use(express.json());
app.get("/", (req, res) => {
    res.send("Csá");
});
app.post("/adat", (req, res) => {
    res.status(200).json(req.body);
});
app.get("/time", (req, res) => {
    res.send(Date.now);
});
app.post("/error", (req, res) => {
    res.status(200).json("Hiba 404");
});
app.listen(5000);
