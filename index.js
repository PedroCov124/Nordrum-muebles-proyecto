const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.send('<h1>Hola</h1>')
})

const port = 3000;
app.listen(port);

console.log(`Listening on: localhost:${3000}`);