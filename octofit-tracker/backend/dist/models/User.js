import mongoose, { Schema } from 'mongoose';
const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    fitnessGoal: { type: String, required: true },
    level: { type: String, required: true },
});
const User = mongoose.models.User || mongoose.model('User', userSchema);
export default User;
