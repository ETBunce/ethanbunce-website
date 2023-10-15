import express from 'express';
import clickTheButton from './api/click-the-button.js'

const app = express();
const router = express.Router();


router.use('/api/click-the-button', clickTheButton)


router.get('/hello', (req, res) => { res.send('Hello, world!'); });


export default router;