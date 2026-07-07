import mongoose, { Schema, Document, Model } from 'mongoose';

export interface ILeaderboardEntry extends Document {
  userId: string;
  points: number;
  rank: number;
  week: string;
}

const leaderboardEntrySchema = new Schema<ILeaderboardEntry>({
  userId: { type: String, required: true },
  points: { type: Number, required: true },
  rank: { type: Number, required: true },
  week: { type: String, required: true },
});

const LeaderboardEntry: Model<ILeaderboardEntry> = mongoose.models.LeaderboardEntry || mongoose.model<ILeaderboardEntry>('LeaderboardEntry', leaderboardEntrySchema);

export default LeaderboardEntry;
