const express = require("express");
const app = express();
const port = 3005;

app.get("/", function (req, res) {
    return res.status(200).json({ message: 'Transakcija uspjesna' });
});

app.listen(port, function () {
    console.log(`Listening on port ${port}!`);
});