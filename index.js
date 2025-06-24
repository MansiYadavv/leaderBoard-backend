
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const http = require('http');
const bodyParser = require('body-parser');
const { connectDb } = require('./config/db');

const { initSocket } = require('./socket/socket'); //this is socket handler

dotenv.config();

const app = express();
const server = http.createServer(app); //this createeee actual server


//this pass the Http server to initSocket
initSocket(server);

//  Connect to MongoDB
connectDb();

//  Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.get('/', (req, res) => {
  res.json({
    message: 'Backend running fine',
    status: 'Working',
    timestamp: new Date().toISOString()
  });
});

//  Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(` Server running with Socket.IO on http://localhost:${PORT}`);
});

