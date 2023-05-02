const fs = require('fs');

const filepath = process.argv[2]

const count = fs.readFileSync(filepath, 'utf-8').split('\n').length -1;

console.log(count)