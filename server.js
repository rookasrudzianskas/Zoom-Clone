const express = require('express')
const app = express()
const port = 3030

app.get('/', (req, res) => {
    res.status(200).send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

// const express = require('express');
// const app = express();
// const server = require('https').Server(app);
//
// app.get('/', (req, res) => {
//     res.status(200).send("Hello World, Rokas 🚀")
// })
//
// server.listen(3030);
//

