import express from "express";
import { v4 as uuidv4 } from "uuid";
const router = express.Router();

let lends = [
    {
        id: 1,
        customer_id: 1,
        isbn: 1,
        borrowed_at: new Date(),
        returned_at: null
    },
    {
        id: 2,
        customer_id: 2,
        isbn: 2,
        borrowed_at: new Date(),
        returned_at: null
    }
]

router.get('/', (request, response) => {
    response.send(lends);
})

router.get('/:id', (request, response) => {
    const id = request.params.id;
    const lend = lends.find((lend) => lend.id === Number(id));
    lend ? response.send(lend) : response.status(404).send("Nicht gefunden 💀");
})


router.post('/', (request, response) => {
    const { customer_id, isbn } = request.body;
    let currentState;
    let newlend;
    if (isbn && customer_id) {
        newlend = { id: uuidv4(), customer_id, isbn, borrowed_at: new Date(), returned_at: null };
    }else{
        response.status(422);
    }
    const borrowedbooks = lends.filter((lend) => lend.isbn === newlend.isbn && lend.returned_at == null);
    if (borrowedbooks.length > 0){
        currentState = false;
    }else{
        currentState = true;
    }
    if (currentState){
        lends.push(newlend);
        response.status(201).send(newlend);
    }else{
        response.status(409).send("Buch ist bereits verliehen");
    }
})

// grosse Kommentar: highlight + alt shift a

/* router. */

export default router;