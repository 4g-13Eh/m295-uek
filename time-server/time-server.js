const net = require('net');

function fillZero(number){
    if (number < 10){
        return '0' + number;
    }else{
        return number;
    }
}

const server = net.createServer((socket) => {
    const date = new Date();
    const year = fillZero(date.getFullYear());
    const month = fillZero(date.getMonth()+1);
    const day = fillZero(date.getDate());
    const hours = fillZero(date.getHours());
    const minutes = fillZero(date.getMinutes());
    let formattedDate = `${year}-${month}-${day} ${hours}:${minutes}`;
    socket.end(formattedDate + '\n');
});

const port = process.argv[2];
server.listen(port);