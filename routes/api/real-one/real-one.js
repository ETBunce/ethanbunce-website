import express from 'express';
import lobbyRouter from './real-one-lobby.js';

const realOneRouter = express.Router();

realOneRouter.use('/', lobbyRouter);

export default realOneRouter;