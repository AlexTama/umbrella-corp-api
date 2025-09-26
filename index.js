const express = require('express');
const app = express();

const PORT = 3000;

app.get("/", (req, res) =>  {
    res.send("Welcome to the Umbrella Corporation. We are operational");
});

app.listen(PORT, () => {
    console.log(`Server running in port ${PORT}`);
})