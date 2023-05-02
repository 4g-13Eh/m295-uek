import express  from "express";

const app = express();
const port = 3000

app.get('/', (request, respond)=>{
    respond.send("Hello World!");
})

app.listen(port, () => {
    console.log(`Server gestartet auf Port ${port}`)
  })