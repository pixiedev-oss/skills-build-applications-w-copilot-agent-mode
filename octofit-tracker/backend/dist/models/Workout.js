import mongoose, { Schema } from 'mongoose';
const workoutSchema = new Schema({
    name: { type: String, required: true },
    focus: { type: String, required: true },
    estimatedDuration: { type: Number, required: true },
    difficulty: { type: String, required: true },
    equipment: { type: [String], default: [] },
});
const Workout = mongoose.models.Workout || mongoose.model('Workout', workoutSchema);
export default Workout;
