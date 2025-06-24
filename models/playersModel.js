

const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
  username: { type: String, required: true },
  region: { type: String, required: true },
  gameMode: { type: String, required: true },
  score: { type: Number, default: 0 },
  date: {
    type: Date,
    default: () => {
      const d = new Date();
      d.setHours(0, 0, 0, 0);
      return d;
    },
    index: { expires: '24h' }
  }
});

// Compound index for leaderboard sorting
playerSchema.index({ region: 1, gameMode: 1, score: -1 });

module.exports = mongoose.model('Player', playerSchema);

