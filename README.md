# Project Name-🏆 LeaderBoard Backend

A real-time multiplayer leaderboard backend built using **Node.js**, **Socket.IO**, and **MongoDB Atlas**. Players can submit scores in real-time and instantly see live leaderboard updates. Leaderboards can be filtered by region and game mode.

---

## 🚀 Features

- ⚡ Real-time score updates using WebSockets (Socket.IO)
- 🌍 Filter leaderboard by `region` and `gameMode`
- 🧠 Fetch top N players dynamically
- ☁️ MongoDB Atlas database
- 🔁 Auto-refresh on code changes using Nodemon
- 🧪 Easy frontend integration (React)

---

## 🌐 Tech Stack

- **Backend:** Node.js, Express
- **WebSocket:** Socket.IO
- **Database:** MongoDB Atlas + Mongoose
- **Frontend:** React + Vite (separate client folder)

---

## 📁 Folder Structure
leaderBoard-backend/
│
├── config/ # MongoDB connection
|-models/# Schema Logic 
├── controllers/ # Leaderboard business logic
├── socket/ # WebSocket server logic
├── index.js # App entry point
├── .env # Environment variables (Mongo URI)

---

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/MansiYadavv/leaderBoard-backend.git
cd leaderBoard-backend

## WebSocket Testing

You can test the WebSocket connection using Postman or any WebSocket client with the following URL:
ws://localhost:3000/socket.io/?EIO=4&transport=websocket

# 2. Install dependencies
npm install

 MongoDB connection string in .env file
MONGODB_URL=mongodb+srv://mansiyadav:mansiyadav@cluster0.kwnyhuc.mongodb.net/leaderboard?retryWrites=true&w=majority&appName=Cluster0
PORT=3000

# 4. Start the server (Default PORT: 3000)
npm start

