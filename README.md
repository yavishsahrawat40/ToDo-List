# Todo List Application

A full-stack Todo List application built with React (TypeScript) and Node.js (TypeScript) featuring user authentication and complete CRUD operations.

## Features

### User Management
- User Signup with validation
- User Sign-in with JWT authentication
- Forgot Password functionality
- Reset Password with email token

### Todo Management
- Create new todos with title and description
- View all todos in a clean interface
- Update todo details (title, description)
- Mark todos as completed or not completed
- Delete todos
- Real-time updates with React Query

## Technology Stack

### Frontend
- React 18 with TypeScript
- React Router for navigation
- Zustand for global state management
- React Query (TanStack Query) for data fetching and caching
- React Hook Form for form handling
- Zod for schema validation
- Axios for API calls
- Vite as build tool

### Backend
- Node.js with TypeScript
- Express.js framework
- MongoDB with Mongoose ODM
- JWT for authentication
- Bcrypt for password hashing
- Nodemailer for email functionality
- Error logging to MongoDB

## Project Structure

```
todo-list/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── database.ts
│   │   ├── controllers/
│   │   │   ├── authController.ts
│   │   │   └── todoController.ts
│   │   ├── middleware/
│   │   │   ├── auth.ts
│   │   │   └── errorHandler.ts
│   │   ├── models/
│   │   │   ├── User.ts
│   │   │   ├── Todo.ts
│   │   │   └── ErrorLog.ts
│   │   ├── routes/
│   │   │   ├── authRoutes.ts
│   │   │   └── todoRoutes.ts
│   │   ├── types/
│   │   │   └── index.ts
│   │   ├── utils/
│   │   │   ├── jwt.ts
│   │   │   ├── email.ts
│   │   │   └── logger.ts
│   │   └── index.ts
│   ├── .env.example
│   ├── package.json
│   └── tsconfig.json
└── frontend/
    ├── src/
    │   ├── api/
    │   │   ├── authApi.ts
    │   │   └── todoApi.ts
    │   ├── components/
    │   │   ├── ProtectedRoute.tsx
    │   │   ├── TodoForm.tsx
    │   │   └── TodoItem.tsx
    │   ├── hooks/
    │   │   └── useTodos.ts
    │   ├── lib/
    │   │   └── axios.ts
    │   ├── pages/
    │   │   ├── Home.tsx
    │   │   ├── Signup.tsx
    │   │   ├── Signin.tsx
    │   │   ├── ForgotPassword.tsx
    │   │   └── ResetPassword.tsx
    │   ├── schemas/
    │   │   ├── authSchemas.ts
    │   │   └── todoSchemas.ts
    │   ├── store/
    │   │   └── authStore.ts
    │   ├── types/
    │   │   └── index.ts
    │   ├── App.tsx
    │   ├── App.css
    │   └── main.tsx
    ├── .env.example
    └── package.json
```

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- MongoDB Atlas account
- Gmail account for email functionality (optional)

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file based on `.env.example`:
```bash
cp .env.example .env
```

4. Update the `.env` file with your credentials:
```
PORT=5000
MONGODB_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_secure_random_string
JWT_EXPIRE=7d
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_gmail_app_password
FRONTEND_URL=http://localhost:5173
```

5. Start the development server:
```bash
npm run dev
```

The backend will run on http://localhost:5000

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file based on `.env.example`:
```bash
cp .env.example .env
```

4. Update the `.env` file:
```
VITE_API_URL=http://localhost:5000/api
```

5. Start the development server:
```bash
npm run dev
```

The frontend will run on http://localhost:5173

## MongoDB Atlas Setup

1. Create a free account at https://www.mongodb.com/cloud/atlas
2. Create a new cluster
3. Click "Connect" and choose "Connect your application"
4. Copy the connection string and replace `<password>` with your database user password
5. Paste the connection string in your backend `.env` file as `MONGODB_URI`

## Email Configuration (Optional)

For password reset functionality:

1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password: https://myaccount.google.com/apppasswords
3. Use this app password in your `.env` file as `EMAIL_PASS`

Note: If you skip email configuration, the forgot password feature will not work, but all other features will function normally.

## API Endpoints

### Authentication
- POST `/api/auth/signup` - Register a new user
- POST `/api/auth/signin` - Login user
- POST `/api/auth/forgot-password` - Request password reset
- PUT `/api/auth/reset-password/:token` - Reset password with token

### Todos (Protected Routes)
- GET `/api/todos` - Get all todos for logged-in user
- POST `/api/todos` - Create a new todo
- PUT `/api/todos/:id` - Update a todo
- DELETE `/api/todos/:id` - Delete a todo

## Key Features Implementation

### Error Handling
All backend errors are caught and logged to a separate MongoDB collection (`errorlogs`) with details including:
- Error message and stack trace
- API endpoint and HTTP method
- User ID (if authenticated)
- Timestamp

### Authentication
- JWT tokens are generated on signup/signin
- Tokens are stored in localStorage on the frontend
- Protected routes verify JWT tokens via middleware
- Tokens are automatically included in API requests via Axios interceptor

### State Management
- Zustand manages authentication state globally
- React Query handles server state and caching
- Automatic cache invalidation on mutations

### Form Validation
- Zod schemas define validation rules
- React Hook Form integrates with Zod for client-side validation
- Server-side validation in backend controllers

## Assumptions

1. Users must verify their email is valid when signing up (no email verification flow implemented)
2. Password reset emails are sent but require proper email configuration
3. Todos are private to each user and cannot be shared
4. The application uses localStorage for token persistence
5. No pagination is implemented for todos (suitable for personal use)
6. The UI is responsive and works on mobile devices
7. All dates are stored in UTC and displayed in user's local timezone

## Development Notes

- The backend uses TypeScript with strict mode enabled
- All API responses follow a consistent format with `success` and `data`/`message` fields
- CORS is enabled for cross-origin requests during development
- The frontend uses Vite for fast development and optimized production builds
- React Query provides automatic retries and background refetching

## Building for Production

### Backend
```bash
cd backend
npm run build
npm start
```

### Frontend
```bash
cd frontend
npm run build
```

The built files will be in the `dist` directory and can be served with any static file server.

## Demo Video

[Link to Google Drive video will be added here]

The demo video shows:
1. User signup and signin
2. Creating new todos
3. Updating todo details
4. Marking todos as completed
5. Deleting todos
6. User logout

## License

This project is created as an assignment and is free to use for educational purposes.
