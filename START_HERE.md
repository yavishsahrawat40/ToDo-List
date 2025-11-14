# 🚀 Quick Start Guide

Welcome! Follow these simple steps to get your Todo List app running.

## Prerequisites Check

Before starting, make sure you have:
- ✅ Node.js installed (v16 or higher)
- ✅ A code editor (VS Code recommended)
- ✅ A web browser (Chrome, Firefox, etc.)

Check Node.js version:
```bash
node --version
npm --version
```

## Step-by-Step Setup

### 1️⃣ MongoDB Atlas (5 minutes)

1. Go to: https://www.mongodb.com/cloud/atlas/register
2. Sign up for a free account
3. Create a new cluster (FREE tier)
4. Wait for cluster creation
5. Click "Connect" → "Connect your application"
6. Copy the connection string
7. Save it for the next step

### 2️⃣ Configure Backend (2 minutes)

1. Open `backend/.env` file
2. Replace this line:
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/todoapp?retryWrites=true&w=majority
   ```
   With your actual connection string from Step 1

3. Change the JWT_SECRET to any random string:
   ```
   JWT_SECRET=my_random_secret_key_12345
   ```

### 3️⃣ Install Dependencies (3 minutes)

Open terminal in project root and run:

```bash
cd backend
npm install
```

Wait for it to complete, then:

```bash
cd ../frontend
npm install
```

### 4️⃣ Start the Application (1 minute)

Open TWO terminal windows:

Terminal 1 (Backend):
```bash
cd backend
npm run dev
```

Wait until you see: "MongoDB Connected"

Terminal 2 (Frontend):
```bash
cd frontend
npm run dev
```

### 5️⃣ Open in Browser

Go to: http://localhost:5173

You should see the Todo List app!

## 🎉 You're Done!

Now you can:
1. Sign up for a new account
2. Create todos
3. Mark them as complete
4. Edit and delete todos

## 📹 Next Steps for Assignment

1. Test all features thoroughly
2. Record a demo video showing:
   - Adding a todo
   - Updating a todo
   - Listing todos
   - Deleting a todo
3. Upload video to Google Drive (make it PUBLIC)
4. Update README.md with video link
5. Push code to GitHub
6. Submit your links

## 🆘 Need Help?

Check these files:
- `SETUP_GUIDE.md` - Detailed setup instructions
- `API_DOCUMENTATION.md` - API reference
- `ASSIGNMENT_CHECKLIST.md` - Submission checklist
- `README.md` - Full documentation

## ⚠️ Common Issues

**"Cannot connect to MongoDB"**
- Check your connection string in `backend/.env`
- Make sure you replaced `<password>` with actual password
- Verify your IP is whitelisted in MongoDB Atlas

**"Port already in use"**
- Close other applications using port 5000 or 5173
- Or change the port in `.env` files

**"Module not found"**
- Delete `node_modules` folder
- Run `npm install` again

## 💡 Pro Tips

1. Keep both terminal windows open while developing
2. Check browser console (F12) for errors
3. Backend logs show in Terminal 1
4. Frontend errors show in browser console
5. Use MongoDB Atlas dashboard to view your data

## 🎯 Testing Checklist

Before recording your demo:
- [ ] Sign up works
- [ ] Sign in works
- [ ] Create todo works
- [ ] Update todo works
- [ ] Mark as complete works
- [ ] Delete todo works
- [ ] Logout works

Good luck! 🚀
