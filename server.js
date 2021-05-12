const express = require('express');
const app = express();
const port = 3030;
const { v4: uuidv4 } = require('uuid');

app.set('view engine', 'ejs');
app.use(express.static('public'))


app.get('/', (req, res) => {
    // generate id, and redirect to it
    // uuid generates the separate id
    res.redirect(`/${uuidv4()}`)
})

app.get('/:room', (req, res) => {
    //passing the url from the link in the top
    res.render('room', {roomId: req.params.room})
})




app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})



