import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IWorkout extends Document {
  name: string;
  focus: string;
  estimatedDuration: number;
  difficulty: string;
  equipment: string[];
}

const workoutSchema = new Schema<IWorkout>({
  name: { type: String, required: true },
  focus: { type: String, required: true },
  estimatedDuration: { type: Number, required: true },
  difficulty: { type: String, required: true },
  equipment: { type: [String], default: [] },
});

const Workout: Model<IWorkout> = mongoose.models.Workout || mongoose.model<IWorkout>('Workout', workoutSchema);

export default Workout;
