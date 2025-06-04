import redis from 'redis';

const redisClient = redis.createClient({ url: process.env.REDIS_URL });

redisClient.on('error', (err) => console.error('Redis Client Error', err));
redisClient.connect();

export default redisClient;
