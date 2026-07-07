import mongoose, { Schema } from 'mongoose';
const activitySchema = new Schema({
    userId: { type: String, required: true },
    type: { type: String, required: true },
    durationMinutes: { type: Number, required: true },
    distanceKm: { type: Number, required: true },
    date: { type: Date, required: true },
});
const Activity = mongoose.models.Activity || mongoose.model('Activity', activitySchema);
export default Activity;
