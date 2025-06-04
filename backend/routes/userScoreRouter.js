import express from 'express';

import { getUserScore } from '../controllers/userScoreController.js';

const userScoreRouter = express.Router();

userScoreRouter.get('/scores', getUserScore);

export default userScoreRouter;