import ScoreSchemaModel from '../models/scoreSchema.js';

import redisClient from '../config/redis.js';

export const getUserScore = async (req, res) => {
    console.log('Fetching user score...');
    const { sbd } = req.query;
    if (!sbd) {
        return res.json({ success: false, message: 'SBD is required' });    
    }
   
    try {
        console.log(`Checking cache for user score with SBD: ${sbd}`);
        const cachedScore = await redisClient.get(`user_score:${sbd}`);
        if (cachedScore) {
            return res.json({ success: true, data: JSON.parse(cachedScore) });
        }
        console.log('Cache miss, fetching from database...');
        const userScore = await ScoreSchemaModel.findOne({ sbd }, {_id: 0, __v: 0 });
        if (!userScore) {
            return res.json({ success: false, message: 'User score not found' });
        }
        console.log('User score found, caching the result...');
        await redisClient.set(`user_score:${sbd}`, JSON.stringify(userScore), 'EX', 3600);
        console.log('Returning user score:', userScore);
        return res.json({ success: true, data: userScore });
    } catch (error) {
        console.error('Error fetching user score:', error);
        return res.json({ success: false, message: 'Internal server error' });
    }
}