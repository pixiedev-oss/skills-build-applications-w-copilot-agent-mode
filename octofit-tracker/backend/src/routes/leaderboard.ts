import { Router } from 'express';
import LeaderboardEntry from '../models/LeaderboardEntry.js';

const router = Router();

router.get('/', async (_req, res) => {
  try {
    const leaderboard = await LeaderboardEntry.find({}).lean();
    res.json({ message: 'Leaderboard route', leaderboard });
  } catch (error) {
    res.status(500).json({ message: 'Failed to load leaderboard', error });
  }
});

export default router;
