const fs = require('fs');
const path = require('path');

module.exports = function(dirpath, filetype, callback){
    fs.readdir(dirpath, (err, data) =>{
        if (err) {
            return callback(err);
        }
        const filteredfiles = data.filter(file => path.extname(file) === `.${filetype}`);
        callback(null, filteredfiles)
    });
};