import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IActivity extends Document {
  userId: string;
  type: string;
  durationMinutes: number;
  distanceKm: number;
  date: Date;
}

const activitySchema = new Schema<IActivity>({
  userId: { type: String, required: true },
  type: { type: String, required: true },
  durationMinutes: { type: Number, required: true },
  distanceKm: { type: Number, required: true },
  date: { type: Date, required: true },
});

const Activity: Model<IActivity> = mongoose.models.Activity || mongoose.model<IActivity>('Activity', activitySchema);

export default Activity;
