import express, { response } from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { ppid } from "process";
import { request } from "http";
import cors from "cors";

const filename = fileURLToPath(import.meta.url);
const __dirname = dirname(filename);

const app = express()
const port = 3000

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(cors());

app.get('/now', (request, respond) => {
    const tz = request.query.tz; // tz = timezone, holt von der URL den Parameter tz
    const time = new Date().toLocaleString("de-CH", {timeZone: tz}); // Zeitzone wird auf die Zeitzone des Parameters tz gesetzt
    respond.send(time);
})
  
app.get('/form', (request, respond) => {
  respond.sendFile(__dirname + '/views/form.html')
})

const names = ["Abu", "Alex", "Benjamin", "Luke"];

app.post('/name', (request, respond) => {
  const name = request.body.name;
  names.push(name)
  respond.send(names)
})
  
/*app.delete('/name', (request, respond) => {
  const name = request.body.name;
  const index = names.indexOf(name);
  console.log(names);
  names.shift(names);
  console.log(names);
  respond.send(names);
})*/

app.get('/secret2', (request, response) =>{
  if(request.headers.authorization === "Basic aGFja2VyOjEyMzQ="){
    response.statusCode = 200;
    response.send(response.statusCode);
  }else{
    response.statusCode = 401;
    response.send(response.statusCode);
  }
})

app.get('/chuck', (request, response) =>{
  const name = request.query.name //holt Namen von url
  fetch("https://api.chucknorris.io/jokes/random")
  .then((response) => response.json())
  .then((json) => {
      if (name) {
          return json.value.replace("Chuck Norris", name);
      } else {
          return json.value;
      }
  })
  .then((namedJoke) => response.send(namedJoke));
})

app.listen(port, () => {
  console.log(`Läuft auf Port ${port}`);
})