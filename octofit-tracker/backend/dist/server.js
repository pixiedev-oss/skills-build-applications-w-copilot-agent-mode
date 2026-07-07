import express from 'express';
import dotenv from 'dotenv';
import './config/database.js';
import usersRouter from './routes/users.js';
import teamsRouter from './routes/teams.js';
import activitiesRouter from './routes/activities.js';
import leaderboardRouter from './routes/leaderboard.js';
import workoutsRouter from './routes/workouts.js';
import { getApiBaseUrl } from './utils/apiUrl.js';
dotenv.config();
const app = express();
const PORT = Number(process.env.PORT || 8000);
app.use(express.json());
app.get('/api/health', (_req, res) => {
    res.json({
        status: 'ok',
        service: 'octofit-backend',
        apiUrl: getApiBaseUrl(),
    });
});
app.use('/api/users', usersRouter);
app.use('/api/teams', teamsRouter);
app.use('/api/activities', activitiesRouter);
app.use('/api/leaderboard', leaderboardRouter);
app.use('/api/workouts', workoutsRouter);
app.listen(PORT, () => {
    console.log(`Backend API listening on port ${PORT}`);
});
