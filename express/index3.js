import express, { request, response } from "express";
import lendsRouter from "./routes/lends.js";
import booksRouter from "./routes/books.js";

const app = express()
const port = 3000

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use('/lends', lendsRouter);
app.use('/books', booksRouter);

// TODO: 
// - Bei allen den entsprechenden Status Code mitgeben
// - Parameter darf nicht leer sein, Code 422 zurückgeben
// -Evtl. Funktionen auslagern (export function getBookByIsbn(isbn) usw...)

app.listen(port, () => {
    console.log(`Läuft auf Port ${port}`);
})