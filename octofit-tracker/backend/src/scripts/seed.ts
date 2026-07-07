import mongoose from 'mongoose';
import User from '../models/User.js';
import Team from '../models/Team.js';
import Activity from '../models/Activity.js';
import LeaderboardEntry from '../models/LeaderboardEntry.js';
import Workout from '../models/Workout.js';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

/**
 * Seed the octofit_db database with test data.
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Seed the octofit_db database with test data');

    await Promise.all([
      User.deleteMany({}),
      Team.deleteMany({}),
      Activity.deleteMany({}),
      LeaderboardEntry.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    const users = await User.insertMany([
      {
        name: 'Ava Patel',
        email: 'ava@example.com',
        username: 'ava_runs',
        fitnessGoal: 'Marathon training',
        level: 'Intermediate',
      },
      {
        name: 'Noah Kim',
        email: 'noah@example.com',
        username: 'noah_strength',
        fitnessGoal: 'Muscle gain',
        level: 'Advanced',
      },
      {
        name: 'Mia Chen',
        email: 'mia@example.com',
        username: 'mia_yoga',
        fitnessGoal: 'Mobility and balance',
        level: 'Beginner',
      },
    ]);

    const teams = await Team.insertMany([
      {
        name: 'North Stars',
        sport: 'Running',
        members: users.slice(0, 2).map((user) => user._id.toString()),
        challenge: 'Complete 100 km this week',
      },
      {
        name: 'Peak Power',
        sport: 'Strength',
        members: [users[1]._id.toString(), users[2]._id.toString()],
        challenge: 'Five strength sessions this month',
      },
    ]);

    await Activity.insertMany([
      {
        userId: users[0]._id.toString(),
        type: 'Run',
        durationMinutes: 42,
        distanceKm: 8.4,
        date: new Date('2026-07-06T06:30:00Z'),
      },
      {
        userId: users[1]._id.toString(),
        type: 'Strength',
        durationMinutes: 55,
        distanceKm: 0,
        date: new Date('2026-07-05T18:00:00Z'),
      },
      {
        userId: users[2]._id.toString(),
        type: 'Yoga',
        durationMinutes: 30,
        distanceKm: 0,
        date: new Date('2026-07-04T07:15:00Z'),
      },
    ]);

    await LeaderboardEntry.insertMany([
      {
        userId: users[0]._id.toString(),
        points: 980,
        rank: 1,
        week: '2026-W27',
      },
      {
        userId: users[1]._id.toString(),
        points: 910,
        rank: 2,
        week: '2026-W27',
      },
      {
        userId: users[2]._id.toString(),
        points: 850,
        rank: 3,
        week: '2026-W27',
      },
    ]);

    await Workout.insertMany([
      {
        name: 'Tempo Run',
        focus: 'Endurance',
        estimatedDuration: 35,
        difficulty: 'Intermediate',
        equipment: ['Running shoes'],
      },
      {
        name: 'Upper Body Blast',
        focus: 'Strength',
        estimatedDuration: 45,
        difficulty: 'Advanced',
        equipment: ['Dumbbells', 'Bench'],
      },
      {
        name: 'Sunrise Flow',
        focus: 'Mobility',
        estimatedDuration: 25,
        difficulty: 'Beginner',
        equipment: ['Yoga mat'],
      },
    ]);

    console.log(`Seeded ${users.length} users, ${teams.length} teams, activities, leaderboard entries, and workouts.`);
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
