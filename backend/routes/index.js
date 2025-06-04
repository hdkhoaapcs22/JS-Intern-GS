import userScoreRouter from './userScoreRouter.js';

const userRoutes = (app) => {
    app.use('/api/user', userScoreRouter);
}

export default userRoutes;