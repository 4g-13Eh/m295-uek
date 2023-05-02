const http = require('http');
const bl = require('bl');

const urls = process.argv.slice(2);
const results = [];
let count = 0;

urls.forEach((url, index) => {
  http.get(url, (response) => {
    response.setEncoding('utf8');
    response.pipe(bl((err, data) => {
        if (err) {
            return console.error(err);
        }
        results[index] = data.toString();
        count++;
        if (count === urls.length) {
            results.forEach((result) => {
            console.log(result);
            });
        }}));
    });
})