const fs = require('fs');
const path = require('path');

const dirpath = process.argv[2];
const filetype = process.argv[3];

fs.readdir(dirpath, (err, files) =>{
    if (err) {
        console.error(err);
        return;
    }

    const filteredfiles = files.filter(file => path.extname(file) === `.${filetype}`);
    filteredfiles.forEach(file => console.log(file));
});