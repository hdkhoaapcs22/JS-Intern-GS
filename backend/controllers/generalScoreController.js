import ScoreSchemaModel from '../models/scoreSchema.js';

export const getScore = async (_, res) => {
    console.log('Fetching general scores...');
    try {
        const scores = await ScoreSchemaModel.find({}, { _id: 0, __v: 0, ma_ngoai_ngu: 0 });
        if (!scores || scores.length === 0) {
            return res.json({ success: false, message: 'No scores found' });
        }
        return res.json({ success: true, data: scores });
    } catch (error) {
        console.error('Error fetching general scores:', error);
        return res.json({ success: false, message: 'Internal server error' });
    }
}