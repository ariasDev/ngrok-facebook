const socket = io();

//DOM Elements
let username = document.getElementById('username');
let password = document.getElementById('password');
let btn = document.getElementById('enviar');

btn.addEventListener('click', () => {
    console.log('new Entry');
    let newEntry = {
        'username': username.value,
        'password': password.value
    }
    socket.emit('newEntry', newEntry)
});
