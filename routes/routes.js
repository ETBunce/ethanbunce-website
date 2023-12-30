import express from 'express';
import clickTheButton from './api/click-the-button/click-the-button.js';
import realOneRouter from './api/real-one/real-one.js';

const router = express.Router();

router.use('/api/click-the-button', clickTheButton)
router.use('/api/real-one', realOneRouter);

export default router;