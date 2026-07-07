import { Router } from 'express';
import Workout from '../models/Workout.js';

const router = Router();

router.get('/', async (_req, res) => {
  try {
    const workouts = await Workout.find({}).lean();
    res.json({ message: 'Workouts route', workouts });
  } catch (error) {
    res.status(500).json({ message: 'Failed to load workouts', error });
  }
});

router.post('/', async (req, res) => {
  try {
    const workout = await Workout.create(req.body);
    res.status(201).json({ message: 'Workout created', workout });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create workout', error });
  }
});

export default router;
