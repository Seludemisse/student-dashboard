# Student Management System

A full-stack React application built as a final project for the *React Development — From JavaScript to Component-Based Applications* course. It demonstrates the complete journey from a static UI to a deployed, database-backed (in-memory), authenticated web app.

## Live App

- **Frontend:** https://student-dashboard-alpha-one.vercel.app
- **Backend API:** https://student-api-cjqu.onrender.com/api/students

**Login credentials:**
- Username: `admin`
- Password: `1234`

> ⚠️ The backend is hosted on Render's free tier. The first request after inactivity can take 20–50 seconds while the server wakes up. Student data is stored in memory and will reset to the default 3 students whenever the server restarts — this is expected behavior on the free tier, not a bug.

## Features

- **Componentized UI** — Navbar, Sidebar, StudentCard, and CourseCard as reusable components
- **Routing** — separate pages for `/`, `/students`, `/courses`, and `/settings` via React Router
- **State management** — `useState` for UI state, custom `useStudents` hook for data logic
- **Full CRUD** — Create, Read, Update, and Delete students against a real backend
- **Search & Filter** — filter students by name (search) and by course (dropdown)
- **Forms** — controlled inputs for both creating and editing students, reusing one form
- **Authentication** — simple login gate protecting the dashboard routes
- **Real backend** — Express/Node REST API, connected via `fetch`
- **Clean architecture** — code organized into `components/`, `pages/`, `services/`, `hooks/`, and `utils/`

## Tech Stack

**Frontend:** React (Vite), React Router, plain CSS
**Backend:** Node.js, Express, CORS
**Deployment:** Vercel (frontend), Render (backend)

## Project Structure

```
student-dashboard/
├── src/
│   ├── components/       # Navbar, Sidebar, StudentCard, CourseCard
│   ├── pages/             # Dashboard, Students, Courses, Settings, Login
│   ├── services/          # studentService.js (API calls)
│   ├── hooks/              # useStudents.js (data + state logic)
│   ├── utils/              # validators.js (pure helper functions)
│   ├── App.jsx
│   └── main.jsx
└── package.json

student-api/
├── server.js               # Express REST API (GET/POST/PUT/DELETE)
└── package.json
```

## Running Locally

**Backend:**
```bash
cd student-api
npm install
node server.js
# runs on http://localhost:5000
```

**Frontend:**
```bash
cd student-dashboard
npm install
npm run dev
# runs on http://localhost:5173
```

> Note: for local development, update `BASE_URL` in `src/services/studentService.js` back to `http://localhost:5000/api/students`.

## API Endpoints

| Method | Endpoint              | Description           |
|--------|------------------------|------------------------|
| GET    | `/api/students`        | Get all students       |
| POST   | `/api/students`        | Create a new student   |
| PUT    | `/api/students/:id`    | Update a student       |
| DELETE | `/api/students/:id`    | Delete a student        |

## Author

Built by selmawit demisse following the *React Development* course module prepared by Yared Kebede, covering ES Modules, npm, Vite, JSX, components, props, state, forms, hooks, routing, API integration, authentication, and deployment.
