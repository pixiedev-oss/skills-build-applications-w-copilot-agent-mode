import mongoose, { Schema } from 'mongoose';
const teamSchema = new Schema({
    name: { type: String, required: true },
    sport: { type: String, required: true },
    members: { type: [String], default: [] },
    challenge: { type: String, required: true },
});
const Team = mongoose.models.Team || mongoose.model('Team', teamSchema);
export default Team;
