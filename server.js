const express = require('express');
const app = express();
const server = require('https').Server(app);

app.get('/', (req, res) => {
    res.status(200).write("Hello World, Rokas 🚀")
})

server.listen(3030);
