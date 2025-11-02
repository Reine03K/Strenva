Backend Documentation

Runtime: Node.js, Express, Mongoose

Entry Point
- `src/server.js`: Express app setup, middleware, rate limiting, CORS, MongoDB connection, route mounting, error/404 handlers. Reads env: `PORT`, `NODE_ENV`, `MONGODB_URI`, `FRONTEND_URL`.

Configuration
- `src/config/database.js`: Helper for connecting to MongoDB (unused by `server.js`, which connects directly).

Middleware
- `src/middleware/auth.middleware.js`:
  - `protect`: verifies Bearer JWT (`JWT_SECRET`), loads `req.user`.
  - `authorize(...roles)`: restricts route by `req.user.role`.

Controllers
- `src/controllers/auth.controller.js`:
  - `register`: creates `User` and a role-specific profile (`Student`, `Alumni`, `Teacher`, `Company`). Returns JWT.
  - `login`: verifies credentials, returns JWT + basic user info.
  - `getMe`: returns current user plus role-specific profile.

Models
- `src/models/User.js`: user auth schema (email, password hash, role, flags). Methods: `matchPassword`, `generateToken`.
- `src/models/{Student,Alumni,Teacher,Company}.js`: role-specific profile models.
- `src/models/{Job,Application}.js`: jobs and applications models.

Routes (mounted under `/api`)
- `/auth` → `routes/auth.routes.js`:
  - POST `/register`, POST `/login`, GET `/me` (protected)
- `/users` → `routes/user.routes.js` (placeholder GET `/`)
- `/profiles` → `routes/profile.routes.js` (placeholder GET `/`)
- `/companies` → `routes/company.routes.js` (placeholder GET `/`)
- `/jobs` → `routes/job.routes.js` (placeholder GET `/`)
- `/applications` → `routes/application.routes.js` (placeholder GET `/`)
- `/tests` → `routes/test.routes.js` (placeholder GET `/`)
- `/messages` → `routes/message.routes.js` (placeholder GET `/`)
- `/reviews` → `routes/review.routes.js` (placeholder GET `/`)

Error Handling
- Central error middleware returns `500` with message, includes details in development.
- 404 handler for unmatched routes.

Environment
- `.env` keys used: `MONGODB_URI`, `JWT_SECRET`, `JWT_EXPIRE`, `FRONTEND_URL`, `PORT`, `NODE_ENV`.

Notes
- Port 5001 is recommended locally if 5000 is occupied.
- Rate limiting applies to `/api/` prefix.

