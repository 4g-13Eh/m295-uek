const fs = require('fs');

function leseDateiInhalt(filepath){
    return new Promise((resolve, reject) => {
        fs.readFile(filepath, (err, data) => {
            if (err) {
                reject(err);
            }
            resolve(data.length);
        });
    });
}

leseDateiInhalt('promises.js')
    .then((length) => {
        console.log(`Länge: ${length}`);
    })
    .catch((err) => {
        console.error(err);
    });