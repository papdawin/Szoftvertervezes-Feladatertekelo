const express = require("express");
const app = express();

app.use(express.json());

//app.get("/",(req,res)=>{
//res.send("asdawasdawd")
//})
app.get("/", (req, res) => {
    res.send("Szia");
});

app.post("/adat", (req, res) => {
    res.status(200).json(req.body);
});

app.listen(5000);
