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

router.get('/', (request, response)=>{
    response.send(lends);
})

router.get('/:id', (request, response) =>{
    const id = request.params.id;
    const lend = lends.find((lend) => lend.id === id);
    lend ? response.send(lend) : response.status(404).send("Nicht gefunden 💀");
})

router.post('/', (request, response)=>{
    let newlend = { id: uuidv4(), customer_id, isbn, borrowed_at: new Date(), returned_at: null};
    const { customer_id, isbn } = request.params;
    
})

export default router;