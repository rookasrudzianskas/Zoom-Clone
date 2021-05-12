const express = require('express');
const app = express();
const port = 3030;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('room');
})



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})



