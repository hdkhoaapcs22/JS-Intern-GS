import express from 'express';
import { getScore } from '../controllers/generalScoreController.js';

const generalScoreRouter = express.Router();

generalScoreRouter.get('/scores', getScore);

export default generalScoreRouter;