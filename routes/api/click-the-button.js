import express from 'express';

const router = express.Router();

router.get('/count', (req, res) => {
    console.log('got a count request, sending 1000');
    res.send('1000');
}); //TODO: replace with a real value

router.post('/click', (req, res) => {
    //TODO: increase the click count
    res.send();
})


export default router;