const express = require('express');
const app = express();

const port = 3030;
const server = require('http').Server(app)
const { v4: uuidv4 } = require('uuid');
const io = require('socket.io')(server)
// const { ExpressPeerServer } = require('peer');
// const peerServer = ExpressPeerServer(server, {
//     debug: true
// });
app.set('view engine', 'ejs');

app.use(express.static('public'))
app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
    // generate id, and redirect to it
    // uuid generates the separate id
    res.redirect(`/${uuidv4()}`)
})

app.get('/:room', (req, res) => {
    //passing the url from the link in the top
    res.render('room', {roomId: req.params.room})
})

// then we enter the website, it means, then we enter, and start the video, the socket is going to turn on
io.on('connection', socket => {
    socket.on('join-room', () => {
        console.log("WE HAVE JOINED");
    })
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})



