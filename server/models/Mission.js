const mongoose = require('mongoose');

const missionSchema = new mongoose.Schema({
  title: String,
  description: String,
  location: {
    type: { type: String, default: 'Point' },
    coordinates: [Number]
  },
  rewardPoints: Number
});

missionSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('Mission', missionSchema);
