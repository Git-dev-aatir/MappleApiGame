const Mission = require('../models/Mission');
const User = require('../models/User');
const { calculateDistance } = require('../utils/geoUtils');

exports.getMissions = async (req, res) => {
  const missions = await Mission.find();
  res.json(missions);
};

exports.completeMission = async (req, res) => {
  const { missionId, userLocation } = req.body;
  const mission = await Mission.findById(missionId);
  if (!mission) return res.status(404).json({ error: 'Mission not found' });

  const dist = calculateDistance(userLocation, mission.location.coordinates);
  if (dist > 100) return res.status(403).json({ error: 'You are too far from the location!' });

  const user = await User.findById(req.user.userId);
  if (user.completedMissions.includes(missionId)) {
    return res.status(400).json({ error: 'Already completed' });
  }

  user.completedMissions.push(missionId);
  user.points += mission.rewardPoints;
  await user.save();
  res.json({ success: true, points: user.points });
};
