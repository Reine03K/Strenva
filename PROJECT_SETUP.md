# Project Setup Guide

## Quick Start

Follow these steps to get the project running:

### 1. Install MongoDB

If you don't have MongoDB installed:

- **macOS**: `brew install mongodb-community`
- **Windows**: Download from [mongodb.com](https://www.mongodb.com/try/download/community)
- **Linux**: `sudo apt-get install mongodb`

Start MongoDB:

```bash
mongod
```

### 2. Backend Setup

```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your configuration
npm run dev
```

### 3. Frontend Setup

```bash
cd frontend
npm install
npm start
```

## Database Setup

MongoDB will automatically create the database when you first run the backend.

To access MongoDB shell:

```bash
mongosh
```

## Testing the API

You can test the API using:

- Postman
- curl
- Your browser (for GET requests)

### Example API Calls

**Register a user:**

```bash
curl -X POST http://localhost:5001/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "student@icam.fr",
    "password": "password123",
    "role": "student",
    "profileData": {
      "firstName": "John",
      "lastName": "Doe",
      "city": "Paris",
      "icamCampus": "Lille"
    }
  }'
```

**Login:**

```bash
curl -X POST http://localhost:5001/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "student@icam.fr",
    "password": "password123"
  }'
```

## Next Steps

1. Complete the authentication flow
2. Implement profile creation
3. Add job posting functionality
4. Create the matching algorithm
5. Implement the test system
6. Add chat functionality
7. Create video call integration

## Troubleshooting

### MongoDB connection error

- Make sure MongoDB is running: `mongod`
- Check your connection string in `.env`

### Port already in use

- Change PORT in backend `.env`
- Kill process using the port: `lsof -ti:5001 | xargs kill`

### Module not found errors

- Run `npm install` in both backend and frontend
- Check your Node.js version: `node --version` (should be 16+)

## Development Tips

1. Use `npm run dev` in backend for auto-restart
2. Use React DevTools for debugging
3. Check browser console for frontend errors
4. Check terminal for backend logs
5. Use Postman for API testing

## Project Timeline (6 months)

### Month 1-2: Foundation

- Project setup ✓
- Authentication system
- Database models
- Basic UI

### Month 3-4: Core Features

- Profile creation
- Job posting
- Candidate matching
- Test system

### Month 5: Advanced Features

- Chat system
- Video calls
- Notifications
- Payment integration

### Month 6: Polish & Deploy

- Testing
- Bug fixes
- Performance optimization
- Deployment
