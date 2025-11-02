# Quick Start Guide

## 🚀 Get Started in 3 Steps

### Step 1: Start MongoDB
```bash
# Make sure MongoDB is running
mongod
```

### Step 2: Start Backend
```bash
cd backend
npm install
npm run dev
```
✅ Backend will run on http://localhost:5001

### Step 3: Start Frontend
```bash
cd frontend
npm install
npm start
```
✅ Frontend will run on http://localhost:3000

## 📁 Project Structure

```
icam-talent-platform/
├── backend/               # Node.js + Express
│   ├── src/
│   │   ├── models/       # Mongoose models (User, Student, Alumni, etc.)
│   │   ├── controllers/  # Business logic (auth.controller.js)
│   │   ├── routes/       # API routes
│   │   ├── middleware/   # Auth middleware
│   │   └── server.js     # Entry point
│   └── package.json
│
├── frontend/             # React App
│   ├── src/
│   │   ├── views/        # Page components (HomePage, Login, etc.)
│   │   ├── components/   # Reusable components (Navbar, Footer)
│   │   ├── controllers/  # Frontend logic (AuthController)
│   │   ├── services/     # API services
│   │   └── App.js
│   └── package.json
│
└── README.md
```

## 🎯 MVC Architecture

### Backend MVC
- **Models** (`backend/src/models/`) - Data structures
  - User.js, Student.js, Alumni.js, Teacher.js, Company.js, Job.js, Application.js
  
- **Controllers** (`backend/src/controllers/`) - Business logic
  - auth.controller.js (register, login, getMe)
  
- **Views** - Not used in backend (API returns JSON)

### Frontend MVC
- **Models** - Data structures in services/api.js
- **Views** (`frontend/src/views/`) - Page components
  - HomePage.js, LoginPage.js, RegisterPage.js, Dashboard.js
  
- **Controllers** (`frontend/src/controllers/`) - Application logic
  - AuthController.js (login, register, logout)

## 🔑 Key Features Implemented

✅ User Authentication (Register & Login)
✅ Multiple User Roles (Student, Alumni, Teacher, Company)
✅ Database Models for all entities
✅ API Routes structure
✅ Frontend with React Router
✅ Basic UI with Home, Login, Register pages
✅ MVC Architecture following best practices

## 📝 Next Steps

1. **Complete Profile Creation**
   - Student profile form
   - Alumni profile form
   - Teacher profile form
   - Company profile form

2. **Implement Job System**
   - Job posting
   - Job browsing
   - Candidate selection algorithm

3. **Add Test System**
   - Test generation
   - Test submission
   - Test evaluation

4. **Build Communication**
   - Chat system
   - Video calls (WebRTC)
   - Notifications

5. **Add Payment System**
   - Subscription management
   - Payment processing

## 🛠 Tech Stack

**Backend:**
- Node.js + Express
- MongoDB + Mongoose
- JWT Authentication
- bcryptjs (Password hashing)

**Frontend:**
- React 18
- React Router v6
- Axios (HTTP client)
- React Toastify (Notifications)

## 📚 Documentation

- `README.md` - Full project documentation
- `PROJECT_SETUP.md` - Detailed setup instructions
- `QUICK_START.md` - This file

## 💡 Tips

- Use Postman or similar tool to test API endpoints
- Check MongoDB with `mongosh` command
- Use React DevTools for debugging
- Backend logs appear in terminal
- Frontend logs appear in browser console

## 🎓 For Your 6-Month Project

**Months 1-2:** ✅ Current progress (Foundation)
**Months 3-4:** Profile system, job system, matching algorithm
**Month 5:** Chat, video calls, notifications, payments
**Month 6:** Testing, optimization, deployment, documentation

Good luck with your project! 🚀

