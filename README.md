# CRUD Application

A full-stack task management application with user authentication, built using Node.js, Express, MongoDB, and React.

## Features

- User registration and login
- JWT-based authentication
- Create, read, update, and delete tasks
- Protected routes for authenticated users
- Responsive UI with TailwindCSS

## Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing
- **Zod** - Schema validation
- **CORS** - Cross-origin resource sharing
- **Morgan** - HTTP request logger
- **Cookie-parser** - Parse cookies

### Frontend
- **React** - UI library
- **Vite** - Build tool and dev server
- **TailwindCSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client
- **React Hook Form** - Form handling


## API Endpoints

### Authentication
- `POST /api/register` - Register a new user
- `POST /api/login` - Login user
- `POST /api/logout` - Logout user
- `GET /api/profile` - Get user profile (requires authentication)

### Tasks
- `GET /api/tasks` - Get all tasks for the authenticated user
- `GET /api/tasks/:id` - Get a specific task
- `POST /api/tasks` - Create a new task
- `PUT /api/tasks/:id` - Update a task
- `DELETE /api/tasks/:id` - Delete a task

All task endpoints require authentication.

## Project Structure

```
nodejs-react-mongo/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── api/
│   │   ├── assets/
│   │   ├── pages/
│   │   └── ...
│   ├── package.json
│   └── vite.config.js
├── src/                    # Node.js backend
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── schemas/
│   ├── app.js
│   ├── config.js
│   ├── db.js
│   └── index.js
├── package.json
└── README.md
```