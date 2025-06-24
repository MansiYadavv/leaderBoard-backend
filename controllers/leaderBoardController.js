const Player = require('../models/playersModel');

exports.updateScore = async (data) => {
  const { username, region, gameMode, score } = data;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const player = await Player.findOneAndUpdate(
    { username, region, gameMode, date: today },
    { $inc: { score } },
    { new: true, upsert: true }
  );

  return player;
};

exports.getTopPlayers = async (region, gameMode, limit = 10) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return await Player.find({ region, gameMode, date: today })
    .sort({ score: -1 })
    .limit(limit);
};