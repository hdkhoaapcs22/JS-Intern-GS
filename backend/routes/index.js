import userScoreRouter from './userScoreRouter.js';
import generalScoreRouter from './generalScoreRouter.js';

const userRoutes = (app) => {
    app.use('/api/user', userScoreRouter);
    app.use('/api/general', generalScoreRouter);
}

export default userRoutes;