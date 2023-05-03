import express, { response } from "express";

const app = express()
const port = 3000

app.get('/now', (request, respond) => {
    const tz = request.query.tz; // tz = timezone, holt von der URL den Parameter tz
    const time = new Date().toLocaleString("de-CH", {timeZone: tz}); // Zeitzone wird auf die Zeitzone des Parameters tz gesetzt
    respond.send(time);
  })
  
  app.post('/name', (request, respond) => {
    const names = [];
    names.push(name);
    respond.send(names);
})
  
  
  app.listen(port, () => {
    console.log(`Läuft auf Port ${port}`);
})