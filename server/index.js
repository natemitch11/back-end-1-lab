const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.listen(4000, () => {console.log(`Hey, you. You're finally awake on port 4000`)})

let friends = ["Nitin", "Eric", "Jeddy", "Cameron", "Riley"];

app.get("/api/users", (req, res) => {
    res.status(200).send(friends);
  });

app.post("/api/users/", (req, res) => {
    console.log(req.body.name)
    friends.push(req.body.name)
    res.status(200).send("User Added Successfully!");
});

app.get("/weather/:temperature", (req, res) => {
    const { temperature } = req.params;
    const phrase = `<h3>It was ${temperature} today</h3>`;
    res.status(200).send(phrase);
});

