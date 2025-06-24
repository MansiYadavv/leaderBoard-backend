
const { Server } = require('socket.io');
const { updateScore, getTopPlayers } = require("../controllers/leaderBoardController");
exports.initSocket = (server) => {
  const io = new Server(server, {
    cors: { origin: '*' }
  });

  console.log(" Socket.IO initialized"); 
  io.on('connection', (socket) => {
    console.log(' Client connected:', socket.id);

    socket.on('scoreUpdate', async (data) => {
      console.log(' scoreUpdate event received:', data);
      const updatedPlayer = await updateScore(data);
      const topPlayers = await getTopPlayers(data.region, data.gameMode, 10);
      io.emit('leaderboardUpdate', topPlayers);
    });

    socket.on('getTopPlayers', async (filter) => {
      console.log(' getTopPlayers event received:', filter);
      const { region, gameMode } = filter;
      const topPlayers = await getTopPlayers(region, gameMode);
      socket.emit('leaderboardData', topPlayers);
    });
  });
};
