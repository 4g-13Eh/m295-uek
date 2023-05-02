const mymodule = require('./mymodule');

const dirpath = process.argv[2];
const filetype = process.argv[3];

mymodule(dirpath, filetype, (err, data)=>{
  if (err) {
    console.error(err);
    return;
  }
  data.forEach(file => {
    console.log(file)
  });
})