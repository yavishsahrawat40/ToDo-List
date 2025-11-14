# Quick Command Reference

All the commands you need in one place.

## Initial Setup

### Install Dependencies

```bash
# Backend
cd backend
npm install

# Frontend (in new terminal)
cd frontend
npm install
```

### Configure Environment

```bash
# Backend - Edit .env file
cd backend
notepad .env

# Frontend - Edit .env file
cd frontend
notepad .env
```

## Development

### Start Development Servers

```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend
cd frontend
npm run dev
```

### Stop Servers

Press `Ctrl + C` in each terminal

## Building for Production

### Build Backend

```bash
cd backend
npm run build
npm start
```

### Build Frontend

```bash
cd frontend
npm run build
```

## Testing

### Check TypeScript Errors

```bash
# Backend
cd backend
npx tsc --noEmit

# Frontend
cd frontend
npx tsc --noEmit
```

### Test API with cURL

```bash
# Sign Up
curl -X POST http://localhost:5000/api/auth/signup ^
  -H "Content-Type: application/json" ^
  -d "{\"name\":\"Test User\",\"email\":\"test@example.com\",\"password\":\"password123\"}"

# Sign In
curl -X POST http://localhost:5000/api/auth/signin ^
  -H "Content-Type: application/json" ^
  -d "{\"email\":\"test@example.com\",\"password\":\"password123\"}"

# Get Todos (replace YOUR_TOKEN)
curl -X GET http://localhost:5000/api/todos ^
  -H "Authorization: Bearer YOUR_TOKEN"

# Create Todo (replace YOUR_TOKEN)
curl -X POST http://localhost:5000/api/todos ^
  -H "Content-Type: application/json" ^
  -H "Authorization: Bearer YOUR_TOKEN" ^
  -d "{\"title\":\"Test Todo\",\"description\":\"Test Description\"}"
```

## Troubleshooting

### Clear and Reinstall

```bash
# Backend
cd backend
rmdir /s /q node_modules
del package-lock.json
npm install

# Frontend
cd frontend
rmdir /s /q node_modules
del package-lock.json
npm install
```

### Check Versions

```bash
node --version
npm --version
```

### Check Running Processes

```bash
# Check what's using port 5000
netstat -ano | findstr :5000

# Check what's using port 5173
netstat -ano | findstr :5173

# Kill process (replace PID)
taskkill /PID <PID_NUMBER> /F
```

## Git Commands

### Initialize Repository

```bash
git init
git add .
git commit -m "Initial commit"
```

### Push to GitHub

```bash
# Add remote (replace with your repo URL)
git remote add origin https://github.com/yourusername/todo-list-app.git

# Push
git branch -M main
git push -u origin main
```

### Check Status

```bash
git status
git log --oneline
```

## MongoDB

### View Connection String

```bash
# Windows
type backend\.env | findstr MONGODB_URI

# Or just open the file
notepad backend\.env
```

## Package Management

### Update Dependencies

```bash
# Backend
cd backend
npm update

# Frontend
cd frontend
npm update
```

### Check for Outdated Packages

```bash
npm outdated
```

### Install Specific Package

```bash
npm install <package-name>
npm install -D <package-name>  # Dev dependency
```

## File Operations

### View File Contents

```bash
type backend\.env
type frontend\.env
type README.md
```

### Edit Files

```bash
notepad backend\.env
notepad frontend\.env
code .  # Open in VS Code
```

### List Files

```bash
dir
dir /s  # Recursive
dir backend\src
dir frontend\src
```

## Environment Variables

### Backend (.env)

```bash
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/todoapp?retryWrites=true&w=majority
JWT_SECRET=your_secret_key_here
JWT_EXPIRE=7d
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
FRONTEND_URL=http://localhost:5173
```

### Frontend (.env)

```bash
VITE_API_URL=http://localhost:5000/api
```

## Quick Fixes

### Backend Won't Start

```bash
cd backend
rmdir /s /q node_modules dist
del package-lock.json
npm install
npm run dev
```

### Frontend Won't Start

```bash
cd frontend
rmdir /s /q node_modules dist
del package-lock.json
npm install
npm run dev
```

### Port Already in Use

```bash
# Find and kill process on port 5000
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Or change port in backend/.env
PORT=5001
```

### Clear Browser Data

1. Open browser
2. Press `Ctrl + Shift + Delete`
3. Clear cache and cookies
4. Restart browser

## Useful Shortcuts

### Terminal

- `Ctrl + C` - Stop running process
- `Ctrl + L` - Clear terminal
- `Tab` - Auto-complete
- `↑` / `↓` - Previous/next command

### VS Code

- `Ctrl + ~` - Toggle terminal
- `Ctrl + P` - Quick file open
- `Ctrl + Shift + P` - Command palette
- `Ctrl + B` - Toggle sidebar

## Development Workflow

### Daily Development

```bash
# 1. Start backend
cd backend
npm run dev

# 2. Start frontend (new terminal)
cd frontend
npm run dev

# 3. Open browser
# http://localhost:5173

# 4. Make changes and test

# 5. Stop servers when done
# Press Ctrl+C in both terminals
```

### Before Committing

```bash
# 1. Check for errors
cd backend
npx tsc --noEmit

cd frontend
npx tsc --noEmit

# 2. Test all features

# 3. Commit
git add .
git commit -m "Your message"
git push
```

## Production Deployment

### Prepare for Deployment

```bash
# 1. Build backend
cd backend
npm run build

# 2. Build frontend
cd frontend
npm run build

# 3. Test production build
cd backend
npm start
```

### Environment Variables for Production

Update these in your hosting platform:
- `MONGODB_URI` - Production database
- `JWT_SECRET` - Strong secret key
- `FRONTEND_URL` - Production frontend URL
- `VITE_API_URL` - Production backend URL

## Monitoring

### View Logs

```bash
# Backend logs (in terminal running npm run dev)
# Frontend logs (browser console - F12)
```

### Check MongoDB

1. Go to MongoDB Atlas dashboard
2. Click "Browse Collections"
3. View: users, todos, errorlogs

## Quick Tests

### Test Backend

```bash
# Should return HTML
curl http://localhost:5000

# Should return 401 (unauthorized)
curl http://localhost:5000/api/todos
```

### Test Frontend

Open browser to:
- http://localhost:5173 - Should show sign in page
- http://localhost:5173/signup - Should show sign up page

## Emergency Commands

### Complete Reset

```bash
# 1. Stop all servers (Ctrl+C)

# 2. Delete everything
cd backend
rmdir /s /q node_modules dist
del package-lock.json

cd ../frontend
rmdir /s /q node_modules dist
del package-lock.json

# 3. Reinstall
cd ../backend
npm install

cd ../frontend
npm install

# 4. Restart
cd ../backend
npm run dev

# In new terminal
cd frontend
npm run dev
```

### Check Everything

```bash
# Node and npm
node --version
npm --version

# Dependencies installed
dir backend\node_modules
dir frontend\node_modules

# Environment files exist
type backend\.env
type frontend\.env

# TypeScript compiles
cd backend
npx tsc --noEmit

cd ../frontend
npx tsc --noEmit
```

## Help Commands

```bash
# npm help
npm help
npm help install
npm help run

# Git help
git help
git help commit
git help push
```

---

**Pro Tip:** Keep this file open in a separate window for quick reference! 📋
