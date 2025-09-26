const express = require('express');
const app = express();

const PORT = 3000;

const characters = [
    { id: 1, name: "Jill Valantine", bio: "S.T.A.R.S Alpha Team member ..." },
    { id: 2, name: "Leon S. Kennedy", bio: "Rookie cop on his first day ..." },
    { id: 3, name: "Ada Wong", bio: "Mysterious corporate spy ..." }
];

app.get("/", (req, res) =>  {
    res.send("Welcome to the Umbrella Corporation. We are operational");
});

app.get("/api/characters", (req, res) => {
    res.json(characters);
});

app.get("/api/characters/:id", (req, res) => {
    const character = characters.find(({ id }) => id == req.params.id)
    res.send(character);
});

app.listen(PORT, () => {
    console.log(`Server running in port ${PORT}`);
})