import express from 'express';

const router = express.Router();

let count = 0;

router.get('/count', (req, res) => {
    res.send(count.toString());
});

router.post('/click', (req, res) => {
    count++;
    res.send(count.toString());
})


export default router;