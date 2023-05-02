const httpcore = require('http');
const bl = require('bl');

const url = process.argv[2];

httpcore.get(url, (response) => {
    response.setEncoding('utf8');
    response.pipe(bl((err, data) => {
        if (err) {
            return console.error(err);
        }
        data = data.toString();
        console.log(data.length);
        console.log(data);
    }));
});