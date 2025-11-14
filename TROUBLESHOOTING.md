# Troubleshooting Guide

Common issues and their solutions.

## Installation Issues

### Problem: npm install fails
**Solution:**
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### Problem: TypeScript errors during installation
**Solution:**
```bash
# Install TypeScript globally
npm install -g typescript

# Then reinstall project dependencies
npm install
```

## Backend Issues

### Problem: "Cannot connect to MongoDB"
**Possible causes and solutions:**

1. **Wrong connection string**
   - Open `backend/.env`
   - Verify MONGODB_URI is correct
   - Make sure you replaced `<password>` with actual password
   - Check database name is included: `...mongodb.net/todoapp?retryWrites=true`

2. **IP not whitelisted**
   - Go to MongoDB Atlas dashboard
   - Network Access → Add IP Address
   - Use `0.0.0.0/0` for testing (allows all IPs)

3. **Wrong credentials**
   - Verify username and password in connection string
   - Create new database user if needed

### Problem: "Port 5000 already in use"
**Solution:**
```bash
# Option 1: Kill the process using port 5000
# Windows:
netstat -ano | findstr :5000
taskkill /PID <PID_NUMBER> /F

# Option 2: Change port in backend/.env
PORT=5001
```

### Problem: "JWT_SECRET is not defined"
**Solution:**
- Open `backend/.env`
- Make sure JWT_SECRET is set:
```
JWT_SECRET=your_secret_key_here
```

### Problem: Email not sending
**This is optional - app works without it**

If you want to fix it:
1. Use a Gmail account
2. Enable 2-Step Verification
3. Generate App Password: https://myaccount.google.com/apppasswords
4. Update `backend/.env`:
```
EMAIL_USER=your.email@gmail.com
EMAIL_PASS=your_16_char_app_password
```

### Problem: Backend crashes on startup
**Solution:**
1. Check terminal for error message
2. Verify all environment variables in `.env`
3. Make sure MongoDB is accessible
4. Check if all dependencies are installed:
```bash
cd backend
npm install
```

## Frontend Issues

### Problem: "Cannot connect to backend"
**Solution:**
1. Make sure backend is running on port 5000
2. Check `frontend/.env`:
```
VITE_API_URL=http://localhost:5000/api
```
3. Check browser console (F12) for CORS errors

### Problem: "Port 5173 already in use"
**Solution:**
Vite will automatically use the next available port (5174, 5175, etc.)
Just use the port shown in the terminal.

### Problem: White screen / App not loading
**Solution:**
1. Check browser console (F12) for errors
2. Make sure all dependencies are installed:
```bash
cd frontend
npm install
```
3. Try clearing browser cache (Ctrl+Shift+Delete)
4. Try incognito mode

### Problem: "Token expired" or "Not authorized"
**Solution:**
1. Clear browser localStorage:
   - Open browser console (F12)
   - Go to Application tab
   - Storage → Local Storage
   - Clear all
2. Sign in again

### Problem: Forms not submitting
**Solution:**
1. Check browser console for validation errors
2. Make sure all required fields are filled
3. Check network tab (F12) for API errors

## Development Issues

### Problem: Changes not reflecting
**Backend:**
```bash
# Restart the server
# Press Ctrl+C to stop
# Then run again:
npm run dev
```

**Frontend:**
```bash
# Vite should auto-reload
# If not, restart:
# Press Ctrl+C to stop
npm run dev
```

### Problem: TypeScript errors
**Solution:**
```bash
# Check for errors
npx tsc --noEmit

# If errors persist, try:
rm -rf node_modules package-lock.json
npm install
```

### Problem: Module not found
**Solution:**
```bash
# Make sure you're in the right directory
pwd

# Install missing dependencies
npm install

# If specific module is missing:
npm install <module-name>
```

## Database Issues

### Problem: Can't see data in MongoDB
**Solution:**
1. Go to MongoDB Atlas dashboard
2. Click "Browse Collections"
3. Select your database (todoapp)
4. View collections: users, todos, errorlogs

### Problem: Duplicate key error
**Solution:**
This means you're trying to create a user with an email that already exists.
- Use a different email
- Or delete the existing user from MongoDB Atlas

### Problem: Data not saving
**Solution:**
1. Check backend terminal for errors
2. Verify MongoDB connection is active
3. Check errorlogs collection in MongoDB for details

## Testing Issues

### Problem: Can't sign up
**Checklist:**
- [ ] Backend is running
- [ ] MongoDB is connected
- [ ] All form fields are filled
- [ ] Email is valid format
- [ ] Password is at least 6 characters
- [ ] Email is not already registered

### Problem: Can't sign in
**Checklist:**
- [ ] Backend is running
- [ ] Email and password are correct
- [ ] User account exists (sign up first)
- [ ] Check browser console for errors

### Problem: Todos not showing
**Checklist:**
- [ ] You are signed in
- [ ] Backend is running
- [ ] Check browser console for errors
- [ ] Try creating a new todo
- [ ] Check MongoDB to see if todos exist

## Browser Issues

### Problem: CORS errors
**Solution:**
This usually means backend is not running or CORS is not configured.
1. Make sure backend is running
2. Check backend terminal for startup messages
3. CORS is already configured in `backend/src/index.ts`

### Problem: Network errors
**Solution:**
1. Check if backend is running
2. Verify API URL in `frontend/.env`
3. Check browser network tab (F12) for failed requests
4. Make sure you're using http://localhost (not 127.0.0.1)

## Build Issues

### Problem: Backend build fails
**Solution:**
```bash
cd backend
npm run build

# If errors, check TypeScript configuration
npx tsc --noEmit
```

### Problem: Frontend build fails
**Solution:**
```bash
cd frontend
npm run build

# If errors, fix TypeScript errors first
npm run dev
# Check console for errors
```

## Environment Variable Issues

### Problem: Environment variables not loading
**Solution:**

**Backend:**
- File must be named exactly `.env` (not `.env.txt`)
- Must be in `backend/` directory
- Restart server after changes

**Frontend:**
- File must be named exactly `.env` (not `.env.txt`)
- Must be in `frontend/` directory
- Variables must start with `VITE_`
- Restart dev server after changes

## Performance Issues

### Problem: App is slow
**Solution:**
1. Check internet connection
2. Check MongoDB Atlas region (choose closest to you)
3. Clear browser cache
4. Close unnecessary browser tabs

### Problem: Backend is slow
**Solution:**
1. Check MongoDB Atlas performance
2. Check error logs for issues
3. Restart backend server

## Git Issues

### Problem: Can't push to GitHub
**Solution:**
```bash
# Make sure you're in the right directory
git status

# Add all files
git add .

# Commit
git commit -m "Initial commit"

# Push
git push origin main
```

### Problem: node_modules in Git
**Solution:**
```bash
# Make sure .gitignore exists
cat .gitignore

# Remove node_modules from Git
git rm -r --cached node_modules
git commit -m "Remove node_modules"
git push
```

## Demo Video Issues

### Problem: Video too large
**Solution:**
- Use screen recording at 720p instead of 1080p
- Keep video under 5 minutes
- Compress video using online tools

### Problem: Google Drive link not working
**Solution:**
1. Right-click file in Google Drive
2. Get link
3. Change "Restricted" to "Anyone with the link"
4. Test in incognito window

## Still Having Issues?

1. **Check all documentation files:**
   - README.md
   - SETUP_GUIDE.md
   - API_DOCUMENTATION.md

2. **Check error messages:**
   - Backend: Terminal output
   - Frontend: Browser console (F12)
   - Database: MongoDB Atlas logs

3. **Verify setup:**
   - Node.js installed: `node --version`
   - Dependencies installed: Check node_modules exists
   - Environment variables: Check .env files
   - MongoDB: Check connection in Atlas dashboard

4. **Start fresh:**
   ```bash
   # Backend
   cd backend
   rm -rf node_modules package-lock.json
   npm install
   npm run dev

   # Frontend
   cd frontend
   rm -rf node_modules package-lock.json
   npm install
   npm run dev
   ```

## Quick Diagnostic Commands

```bash
# Check Node.js version
node --version

# Check npm version
npm --version

# Check if backend dependencies are installed
cd backend && ls node_modules

# Check if frontend dependencies are installed
cd frontend && ls node_modules

# Check if .env files exist
ls backend/.env
ls frontend/.env

# Check if backend compiles
cd backend && npx tsc --noEmit

# Check if frontend compiles
cd frontend && npm run build
```

## Emergency Reset

If nothing works, start completely fresh:

```bash
# 1. Delete everything except source code
rm -rf backend/node_modules backend/package-lock.json backend/dist
rm -rf frontend/node_modules frontend/package-lock.json frontend/dist

# 2. Reinstall backend
cd backend
npm install

# 3. Reinstall frontend
cd ../frontend
npm install

# 4. Verify .env files are correct
cat backend/.env
cat frontend/.env

# 5. Start backend
cd backend
npm run dev

# 6. Start frontend (in new terminal)
cd frontend
npm run dev
```

---

**Remember:** Most issues are due to:
1. Missing environment variables
2. Backend not running
3. MongoDB connection issues
4. Dependencies not installed

Check these first! 🔍
