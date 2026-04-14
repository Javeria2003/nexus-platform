# 📘 Nexus API Documentation

This document describes all backend APIs used in the Nexus platform.

---

## 🔐 Authentication APIs

### Register User
POST /api/auth/register

Request Body:
{
  "name": "John",
  "email": "john@example.com",
  "password": "123456",
  "role": "investor"
}

Response:
{
  "message": "User created successfully"
}

---

### Login User
POST /api/auth/login

Request Body:
{
  "email": "john@example.com",
  "password": "123456"
}

Response:
{
  "token": "JWT_TOKEN",
  "user": { ... }
}

---

## 👤 Profile

### Get Profile
GET /api/auth/profile  
Headers:
Authorization: Bearer TOKEN

---

## 📅 Meetings

### Create Meeting
POST /api/meetings  
Headers:
Authorization: Bearer TOKEN

Body:
{
  "title": "Startup Pitch",
  "participants": ["userId1", "userId2"],
  "date": "2026-04-14",
  "time": "10:00 AM"
}

---

### Get All Meetings
GET /api/meetings  
Headers:
Authorization: Bearer TOKEN

---

### Update Meeting Status
PUT /api/meetings/:id  
Body:
{
  "status": "accepted"
}

---

## 📄 Documents

### Upload Document
POST /api/documents/upload  
Form-Data:
file: (binary)

---

### Get Documents
GET /api/documents

---

## 💳 Payments (Mock)

### Deposit
POST /api/payments/deposit

### Withdraw
POST /api/payments/withdraw

### History
GET /api/payments/history

---

## 🔒 Security

- JWT Authentication required for protected routes
- Passwords hashed using bcrypt
- Role-based access control (Investor / Entrepreneur)

---

## 🌐 Base URL (Production)

https://your-backend-url.onrender.com/api
