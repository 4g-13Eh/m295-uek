import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";

const filename = fileURLToPath(import.meta.url);
const __dirname = dirname(filename);

const app = express()
const port = 3000

app.get('/', (request, respond) => {
  respond.send('Hello World!');
})

// Request / Response Auftrag 1
app.get('/now', (request, respond) => {
  respond.send(new Date().toISOString());
})

app.get('/zli', (request, respond)=>{
    respond.redirect("https://www.zli.ch");
})

app.get('/name', (request, respond) => {
  const names = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J","K","L","M","N","O","P","Q","R","S","T"];
  let randnam = names[Math.floor(Math.random()*names.length)];
  respond.send(randnam);
})

app.get('/html', (request, respond) => {
  respond.sendFile(__dirname + "/views/index.html");
});

app.get('/image', (request, respond)=>{
  respond.sendFile(__dirname + "/public/Image.jpeg");
})

app.get('/teapot', (request, respond)=>{
  respond.send(response.status(418));
})

app.get('/user-agent', (request, respond)=>{
  respond.send(request.headers["user-agent"]);
})

app.get('/secret', (request, respond)=>{
  respond.statusCode = 403;
  respond.send(respond.statusCode);
})

app.get('/xml', (request, respond)=>{
  respond.sendFile(__dirname + "/views/index.xml");
})

app.get('/me', (request, respond)=>{
  var me = {"literally me":{"Vorname": "Shahin", "Nachname": "Amon", "Alter": "17", "Wohnort": "Zürich", "Augenfarbe": "Braun"}};
  respond.send(me);
})

app.listen(port, () => {
  console.log(`Läuft auf Port ${port}`);
})