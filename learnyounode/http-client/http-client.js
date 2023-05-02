const httpcore = require('http');

const url = process.argv[2];

httpcore.get(url, (response) => {
    response.setEncoding('utf8');
    response.on('data', console.log);
})