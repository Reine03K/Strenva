Frontend Files Overview

src/index.js
- Bootstraps React application and renders `App`.

src/App.js
- Top-level app component. Typically sets up routing and layout.

src/services/api.js
- Axios instance with base URL from `REACT_APP_API_URL` or `http://localhost:5000/api`.
- Adds Authorization header from `localStorage.token`.
- Intercepts 401 to clear storage and redirect to `/login`.

src/controllers/AuthController.js
- Wraps auth-related API calls (register, login, get current user).

src/views/
- `HomePage.js`, `LoginPage.js`, `RegisterPage.js`, `Dashboard.js` and their corresponding CSS files.

src/components/
- `Navbar.js` and `Footer.js` plus styles.

src/assets, src/styles, src/utils
- Project assets, shared styles, and utilities (if any).

Environment
- `REACT_APP_API_URL` should match backend API (e.g., `http://localhost:5001/api`).


