import { Router } from 'express';
import Activity from '../models/Activity.js';

const router = Router();

router.get('/', async (_req, res) => {
  try {
    const activities = await Activity.find({}).lean();
    res.json({ message: 'Activities route', activities });
  } catch (error) {
    res.status(500).json({ message: 'Failed to load activities', error });
  }
});

router.post('/', async (req, res) => {
  try {
    const activity = await Activity.create(req.body);
    res.status(201).json({ message: 'Activity created', activity });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create activity', error });
  }
});

export default router;
