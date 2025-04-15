const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  points: { type: Number, default: 0 },
  completedMissions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Mission' }]
});

module.exports = mongoose.model('User', userSchema);
