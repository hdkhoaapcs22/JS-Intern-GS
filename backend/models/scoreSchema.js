import mongoose from 'mongoose';

const scoreSchema = new mongoose.Schema({
  sbd: String,
  toan: Number,
  ngu_van: Number,
  ngoai_ngu: Number,
  vat_li: Number,
  hoa_hoc: Number,
  sinh_hoc: Number,
  lich_su: Number,
  dia_li: Number,
  gdcd: Number,
  ma_ngoai_ngu: String,
});

const ScoreSchemaModel =
  mongoose.models.score || mongoose.model("score", scoreSchema);

export default ScoreSchemaModel;
