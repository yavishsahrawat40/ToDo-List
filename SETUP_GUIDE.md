# Quick Setup Guide

Follow these steps to get the Todo List application running on your machine.

## Step 1: MongoDB Atlas Setup

1. Go to https://www.mongodb.com/cloud/atlas/register
2. Create a free account
3. Create a new cluster (choose the free tier)
4. Wait for the cluster to be created (takes 3-5 minutes)
5. Click "Connect" button
6. Add your current IP address to the IP whitelist (or use 0.0.0.0/0 for testing)
7. Create a database user with username and password
8. Choose "Connect your application"
9. Copy the connection string (looks like: `mongodb+srv://username:password@cluster.mongodb.net/`)
10. Replace `<password>` with your actual password

## Step 2: Backend Configuration

1. Open `backend/.env` file
2. Replace the `MONGODB_URI` value with your connection string from Step 1
3. Make sure to add the database name at the end: `...mongodb.net/todoapp?retryWrites=true&w=majority`
4. Change `JWT_SECRET` to any random string (keep it secret!)

Example:
```
MONGODB_URI=mongodb+srv://myuser:mypassword@cluster0.abc123.mongodb.net/todoapp?retryWrites=true&w=majority
JWT_SECRET=my_super_secret_random_string_12345
```

## Step 3: Start Backend Server

```bash
cd backend
npm install
npm run dev
```

You should see:
```
Server running on port 5000
MongoDB Connected: cluster0-shard-00-00.abc123.mongodb.net
```

## Step 4: Start Frontend Server

Open a new terminal window:

```bash
cd frontend
npm install
npm run dev
```

You should see:
```
VITE v7.x.x  ready in xxx ms
➜  Local:   http://localhost:5173/
```

## Step 5: Test the Application

1. Open your browser and go to http://localhost:5173
2. Click "Sign Up" to create a new account
3. Fill in your details and submit
4. You'll be redirected to the home page
5. Start creating todos!

## Troubleshooting

### Backend won't start
- Check if MongoDB connection string is correct
- Make sure your IP is whitelisted in MongoDB Atlas
- Verify the database user credentials

### Frontend won't connect to backend
- Make sure backend is running on port 5000
- Check `frontend/.env` has correct API URL
- Check browser console for errors

### Port already in use
- Backend: Change `PORT` in `backend/.env`
- Frontend: Vite will automatically use next available port

## Email Configuration (Optional)

If you want password reset to work:

1. Use a Gmail account
2. Enable 2-Step Verification
3. Generate App Password: https://myaccount.google.com/apppasswords
4. Update `backend/.env`:
```
EMAIL_USER=your.email@gmail.com
EMAIL_PASS=your_16_character_app_password
```

Note: The app works fine without email configuration, except for password reset feature.

## Testing the Features

### User Authentication
1. Sign up with a new account
2. Log out
3. Sign in with the same credentials
4. Try forgot password (if email is configured)

### Todo Operations
1. Create a todo with title and description
2. Mark it as completed by clicking the checkbox
3. Click "Edit" to update the todo
4. Click "Delete" to remove it

## Next Steps

- Record your demo video showing all features
- Upload to Google Drive with public access
- Update README.md with the video link
- Push code to GitHub
- Submit your repository link

## Common Issues

1. "Cannot connect to MongoDB" - Check connection string and IP whitelist
2. "Invalid token" - Clear browser localStorage and sign in again
3. "CORS error" - Make sure backend is running and CORS is enabled
4. Build errors - Delete node_modules and run `npm install` again

## Production Deployment

For production deployment:

1. Update environment variables with production values
2. Build frontend: `cd frontend && npm run build`
3. Build backend: `cd backend && npm run build`
4. Deploy backend to services like Heroku, Railway, or Render
5. Deploy frontend to Vercel, Netlify, or similar
6. Update CORS settings in backend to allow your frontend domain
