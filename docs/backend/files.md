Backend Files Overview

src/server.js
- Express app setup: security (helmet), compression, CORS (from `FRONTEND_URL`), JSON body parsing.
- Rate limiting on `/api/*`.
- MongoDB connection via `MONGODB_URI` (or local default) and startup logs.
- Route mounting under `/api`: auth, users, profiles, companies, jobs, applications, tests, messages, reviews.
- Error handler and 404 handler.

src/config/database.js
- Reusable Mongo connection helper (not used directly by `server.js`).

src/middleware/auth.middleware.js
- `protect`: JWT verification using `JWT_SECRET`; attaches `req.user` or rejects.
- `authorize(...roles)`: guards routes by `req.user.role`.

src/controllers/auth.controller.js
- `register(email, password, role, profileData)`: creates User + role profile; returns JWT token.
- `login(email, password)`: verifies credentials; returns JWT + user info.
- `getMe()`: returns current user with role-specific profile.

src/models/*.js
- `User.js`: email, password (hashed), role enum. Methods: `matchPassword`, `generateToken` (uses `JWT_SECRET`, `JWT_EXPIRE`).
- `Student.js`, `Alumni.js`, `Teacher.js`, `Company.js`: profile schemas keyed by `userId`.
- `Job.js`: job postings.
- `Application.js`: applications referencing Job and User.

src/routes/*.routes.js
- `auth.routes.js`: POST `/register`, POST `/login`, GET `/me` (protected).
- `user.routes.js`: GET `/` placeholder.
- `profile.routes.js`: GET `/` placeholder.
- `company.routes.js`: GET `/` placeholder.
- `job.routes.js`: GET `/` placeholder.
- `application.routes.js`: GET `/` placeholder.
- `test.routes.js`: GET `/` placeholder.
- `message.routes.js`: GET `/` placeholder.
- `review.routes.js`: GET `/` placeholder.


