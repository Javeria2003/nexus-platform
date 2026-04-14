# 🚀 Nexus – Investor & Entrepreneur Collaboration Platform

Nexus is a full-stack web application designed to connect **investors and entrepreneurs** in one unified platform. It enables users to collaborate through meetings, real-time video calls, document sharing, and financial transaction simulation.

---

## 🌐 Live Demo

- Frontend: https://your-frontend-url.vercel.app
- Backend API: https://your-backend-url.onrender.com

---

## 📌 Project Objective

To build a fully functional collaboration platform where:
- Entrepreneurs can showcase ideas/startups
- Investors can connect, schedule meetings, and collaborate
- Users can securely communicate and share documents

---

## ⚙️ Tech Stack

### Frontend:
- React.js
- React Router
- Axios
- Socket.io Client
- CSS / Tailwind (if used)

### Backend:
- Node.js
- Express.js
- MongoDB
- Mongoose
- Socket.io
- JWT Authentication
- bcrypt.js

---

## ✨ Core Features

### 🔐 Authentication System
- User registration & login
- JWT-based authentication
- Role-based access (Investor / Entrepreneur)

---

### 👤 User Profiles
- Profile creation and management
- Stored in MongoDB
- Role-based dashboard access

---

### 📅 Meeting Scheduling System
- Create meetings between users
- Accept / reject meeting requests
- Prevent duplicate scheduling conflicts
- Stored in database

---

### 🎥 Video Calling (Socket.IO)
- Real-time video call room creation
- Join meeting rooms
- WebRTC signaling support via Socket.IO
- Mute/unmute and end call functionality

---

### 📄 Document Management System
- Upload documents using Multer
- Store metadata in database
- Preview uploaded documents
- Link documents with users

---

### 💳 Payment Simulation Module
- Deposit / withdraw / transfer APIs
- Transaction history tracking
- Mock payment system (no real transactions)

---

### 🔒 Security Features
- Password hashing using bcrypt
- JWT token authentication
- Protected routes (middleware-based)
- Role-based authorization

---

## 📁 Project Structure
