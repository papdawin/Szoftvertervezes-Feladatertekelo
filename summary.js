const fs = require("fs");
const path = require("path");

const jsonsInDir = fs
    .readdirSync("./data")
    .filter((file) => path.extname(file) === ".json");

jsonsInDir.forEach((file) => {
    const fileData = fs.readFileSync(path.join("./data", file));
    const json = JSON.parse(fileData.toString());
    fs.appendFileSync(
        "./results.txt",
        `Hallgato: ${file.split(".")[0]}\t${
            (json.numPassedTests / 4) * 100
        } %-ot ért el\n`
    );
});
