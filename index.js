
// const express=require("express");
// const cors=require("cors");
// const dotenv=require("dotenv");
// const { connectDb } = require('./config/db');
// const bodyParser = require("body-parser");
// const { initSocket } = require('./socket/socket');
// const http = require('http');
// const playerRoutes = require('./routes/playerRoutes');

// require('dotenv').config(); 

// const app=express();

// const server = http.createServer(app);
// initSocket(server);



// connectDb(); 
// //middleware
// app.use(cors());
// // app.use(morgan("dev"));
// app.use(express.json());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));


// app.use('/api/players', require('./routes/playerRoutes'));

// app.get('/', (req, res) => {  //this make deployment ease because it give head and get a route ......
//   res.json({ 
//     message: "backend running fine",
//     status: 'Working',
//     timestamp: new Date().toISOString()
//   });
// });





// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// console.log("MONGODB_URL:", process.env.MONGODB_URL)



const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const http = require('http');
const bodyParser = require('body-parser');
const { connectDb } = require('./config/db');
const playerRoutes = require('./routes/playerRoutes');
const { initSocket } = require('./socket/socket'); // your socket handler

dotenv.config();

const app = express();
const server = http.createServer(app); // ✅ Create the actual server

// ✅ Pass the HTTP server to initSocket
initSocket(server);

// ✅ Connect to MongoDB
connectDb();

// ✅ Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ✅ Routes
app.use('/api/players', playerRoutes);

app.get('/', (req, res) => {
  res.json({
    message: 'Backend running fine',
    status: 'Working',
    timestamp: new Date().toISOString()
  });
});

// ✅ Start the server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`🚀 Server running with Socket.IO on http://localhost:${PORT}`);
});

