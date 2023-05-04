import express, { request, response } from "express";
import lendsRouter from "./routes/lends.js";
import booksRouter from "./routes/books.js";
import session from "express-session";

const app = express()
const port = 3000

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use('/lends', lendsRouter);
app.use('/books', booksRouter);
app.use(session({
    secret: 'supersecret',
    resave: false,
    saveUninitialized: false,
    cookie: {}
}))

const secretAdminCredentials = {
    email: "a@gmail.com",
    password: 123
}

app.post('/login', (request, response) => {
    const { email, password } = request.body;
    const lower_email = email?.toLowerCase();
    if (lower_email === secretAdminCredentials.email && password === secretAdminCredentials.password){
        request.session.email = email;
        return response.status(200).json({ email: request.session.email });
    }
    return response.status(401).json({ error: "Invalid Credentials" });
})

app.get('/verify', function (request, response) {
    if (request.session.email){
        return response.status(200).json({ email: request.session.email });
    }
    return response.status(401).json({ error: "Nicht eingeloggt!" });
})

app.delete('/logout', function (request, response) {
    if (request.session.email){
        request.session.email = null;
        return response.status(204).send();
    }
    return response.status(401).json({ error: "Nicht eingeloggt!" });
})
    

// TODO: 
// - Bei allen den entsprechenden Status Code mitgeben
// - Parameter darf nicht leer sein, Code 422 zurückgeben
// -Evtl. Funktionen auslagern (export function getBookByIsbn(isbn) usw...)




app.listen(port, () => {
    console.log(`Läuft auf Port ${port}`);
})