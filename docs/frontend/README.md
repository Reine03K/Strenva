Frontend Documentation

Runtime: React 18, react-router-dom, axios

Entry Points
- `src/index.js`: React bootstrapping.
- `src/App.js`: App shell and routing.

Services
- `src/services/api.js`: Axios instance. Base URL from `REACT_APP_API_URL` or defaults to `http://localhost:5000/api`. Adds Authorization header if `localStorage.token` exists. Handles 401 globally by clearing auth and redirecting to `/login`.

Controllers
- `src/controllers/AuthController.js`: Abstraction over auth API calls used by UI (register, login, current user).

Views
- `src/views/HomePage.js`: Landing page UI.
- `src/views/LoginPage.js`: Login form and logic.
- `src/views/RegisterPage.js`: Registration form.
- `src/views/Dashboard.js`: Post-login dashboard.

Components
- `src/components/Navbar.js`: Top navigation.
- `src/components/Footer.js`: Footer links.

Styles
- `src/index.css`, `src/views/*.css`, `src/components/*.css`: Component and page styles.

Environment
- `.env` key used: `REACT_APP_API_URL` (e.g., `http://localhost:5001/api`).


