import express, { response } from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { ppid } from "process";

const filename = fileURLToPath(import.meta.url);
const __dirname = dirname(filename);

const app = express()
const port = 3000

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.get('/now', (request, respond) => {
    const tz = request.query.tz; // tz = timezone, holt von der URL den Parameter tz
    const time = new Date().toLocaleString("de-CH", {timeZone: tz}); // Zeitzone wird auf die Zeitzone des Parameters tz gesetzt
    respond.send(time);
  })
  
  app.get('/form', (request, response) => {
    response.sendFile(__dirname + '/views/form.html')
  })
  
  app.post('/name', (request, respond) => {
    const names = ["Abu", "Alex", "Benjamin", "Luke"];
    const name = request.body.name;
    names.push(name)
    respond.send(names)
})
  
  
  app.listen(port, () => {
    console.log(`Läuft auf Port ${port}`);
})