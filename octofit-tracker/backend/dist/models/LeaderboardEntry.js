import mongoose, { Schema } from 'mongoose';
const leaderboardEntrySchema = new Schema({
    userId: { type: String, required: true },
    points: { type: Number, required: true },
    rank: { type: Number, required: true },
    week: { type: String, required: true },
});
const LeaderboardEntry = mongoose.models.LeaderboardEntry || mongoose.model('LeaderboardEntry', leaderboardEntrySchema);
export default LeaderboardEntry;
