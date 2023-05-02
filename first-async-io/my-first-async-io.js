const fs = require('fs');

const filepath = process.argv[2]

fs.readFile(filepath, 'utf-8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    
    const lines = data.split('\n');
    console.log(lines.length - 1);
});