# Icam Talent Platform

A platform connecting Icam students, alumni, and teachers with companies for freelance opportunities and projects.

## Project Overview

This is a 6-month engineering school project implementing a talent marketplace platform with the following key features:

- **Connecting Talents**: Students, alumni, and teachers from Icam
- **Job Postings**: Companies can post job opportunities with specific requirements
- **Candidate Selection**: Platform selects 3-5 candidates matching profiles
- **Practical Testing**: Validated tests for candidates (2-day deadline)
- **Chat & Video Calls**: Secure communication channels
- **MVC Architecture**: Following Model-View-Controller pattern

## Tech Stack

### Backend

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication
- **bcryptjs** - Password hashing

### Frontend

- **React** - UI framework
- **React Router** - Routing
- **Axios** - HTTP client
- **react-toastify** - Notifications

## Project Structure

```bash
icam-talent-platform/
├── backend/
│   ├── src/
│   │   ├── config/        # Configuration files
│   │   ├── controllers/   # Controller logic (MVC)
│   │   ├── middleware/    # Custom middleware
│   │   ├── models/        # Database models (MVC)
│   │   ├── routes/        # API routes
│   │   ├── utils/         # Utility functions
│   │   └── server.js      # Entry point
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── controllers/   # Frontend controllers
│   │   ├── models/        # Data models
│   │   ├── services/      # API services
│   │   ├── views/         # Page views (MVC)
│   │   └── App.js         # Main app component
│   └── package.json
└── README.md
```

## Installation

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

### Backend Setup

1. Navigate to backend directory:

```bash
cd backend
```

2.Install dependencies:

```bash
npm install
```

3.Create `.env` file from `.env.example`:

```bash
cp .env.example .env
```

4.Update `.env` with your configuration:

```env
PORT=5001
MONGODB_URI=mongodb://localhost:8080/icam-talent-platform
JWT_SECRET=your-secret-key
JWT_EXPIRE=7d
```

5.Start the server:

```bash
# Development mode
npm run dev

# Production mode
npm start
```

### Frontend Setup

1. Navigate to frontend directory:

```bash
cd frontend
```

2.Install dependencies:

```bash
npm install
```

3.Create `.env` file:

```env
REACT_APP_API_URL=http://localhost:5001/api
```

4.Start the development server:

```bash
npm start
```

The app will be available at `http://localhost:3000`

## User Roles

### Icam Users

1. **Student** - Can apply for internships and jobs
2. **Alumni** - Experienced professionals for freelance work
3. **Teacher** - Can offer training and expertise

### Companies

- Post job openings
- Review candidates
- Conduct interviews
- Select candidates

## Key Features

### For Talents

- Create detailed profiles
- Apply for jobs
- Take practical tests
- Chat with companies
- Receive feedback

### For Companies

- Post job openings
- Receive matched candidates
- Review test results
- Communicate with candidates
- Select best fit

## API Endpoints

- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login
- `GET /api/auth/me` - Get current user
- `GET /api/users` - Get users list
- `GET /api/profiles` - Get user profiles
- `GET /api/jobs` - Get job listings
- `POST /api/jobs` - Create job posting
- `GET /api/applications` - Get applications
- `POST /api/applications` - Apply for job

## Development

### Backend Development

```bash
cd backend
npm run dev  # Uses nodemon for auto-restart
```

### Frontend Development

```bash
cd frontend
npm start  # React development server
```

## Testing

Tests will be added in the `tests/` directory for both backend and frontend.

## Contributing

This is a school project. Follow the MVC pattern for code organization.

## License

Educational project - Icam Engineering School

## Author

Josue Daniel Koanga
4th Year Engineering Student
