var axios = require('axios');
var socket = require('socket.io');
require('dotenv').config();

function confirmUserPresence(idLecture, userCpf) {

    axios.post(process.env.WEBSITE_URL + `/confirmacao/${idLecture}/${userCpf}`, () => {

    }).then((res) => {
        console.log(res);
    });

}