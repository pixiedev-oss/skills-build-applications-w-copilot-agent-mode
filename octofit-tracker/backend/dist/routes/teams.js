import { Router } from 'express';
import Team from '../models/Team.js';
const router = Router();
router.get('/', async (_req, res) => {
    try {
        const teams = await Team.find({}).lean();
        res.json({ message: 'Teams route', teams });
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to load teams', error });
    }
});
router.post('/', async (req, res) => {
    try {
        const team = await Team.create(req.body);
        res.status(201).json({ message: 'Team created', team });
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to create team', error });
    }
});
export default router;
