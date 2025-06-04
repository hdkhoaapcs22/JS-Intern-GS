import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import redisClient from './config/redis.js';

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send('API Running'));

const PORT = 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
