import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import redisClient from './config/redis.js';
import mongoose from 'mongoose';
import ScoreSchemaModel from './models/scoreSchema.js';
import fs from 'fs';
import csv from 'csv-parser';
import userRoutes from './routes/index.js';

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

userRoutes(app);


app.get('/', (req, res) => res.send('API Running'));


async function seedScores() {
  try {
    const count = await ScoreSchemaModel.countDocuments();

    if (count > 0) {
      console.log('Collection already has data. Skipping seeding.');
      return;
    }
    const results = [];

    fs.createReadStream('seed/diem_thi_thpt_2024.csv')
      .pipe(csv())
      .on('data', (data) => {
        const cleanData = {
          sbd: data.sbd,
          toan: parseFloat(data.toan) || null,
          ngu_van: parseFloat(data.ngu_van) || null,
          ngoai_ngu: parseFloat(data.ngoai_ngu) || null,
          vat_li: parseFloat(data.vat_li) || null,
          hoa_hoc: parseFloat(data.hoa_hoc) || null,
          sinh_hoc: parseFloat(data.sinh_hoc) || null,
          lich_su: parseFloat(data.lich_su) || null,
          dia_li: parseFloat(data.dia_li) || null,
          gdcd: parseFloat(data.gdcd) || null,
          ma_ngoai_ngu: data.ma_ngoai_ngu,
        };
        results.push(cleanData);
      })
      .on('end', async () => {
        await ScoreSchemaModel.insertMany(results);
        console.log('✅ Seeded successfully!');
      });

  } catch (err) {
    console.error('❌ Error while seeding:', err);
    mongoose.connection.close();
  } finally{
    console.log('Seeding process completed.');
  }
}

seedScores();

const PORT = 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
