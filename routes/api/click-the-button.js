import express from 'express';
import conn from '../../database/connections/click-the-button.js';

const countModel = conn.model('Count');

const router = express.Router();

const countId = '653348845d5e7241db14a22f';

router.get('/count', (req, res) => {
    countModel.findById(countId)
        .then(result => {
            res.send(result.count.toString());
        })
        .catch(err => {
            console.log(err);
            res.send();
        })
});

router.post('/click', (req, res) => {
    countModel.findByIdAndUpdate(countId, { $inc: { count: 1 } })
        .then(result => {
            res.send((result.count + 1).toString());
        })
        .catch(err => {
            console.log(err)
            res.send();
        })
})


// let count = 0;

// router.get('/count', (req, res) => {
//     res.send(count.toString());
// });

// router.post('/click', (req, res) => {
//     count++;
//     res.send(count.toString());
// })



export default router;