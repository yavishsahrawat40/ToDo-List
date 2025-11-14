# Video Recording Guide

Step-by-step guide for recording your demo video.

## Before Recording

### 1. Prepare Your Environment
- [ ] Close unnecessary browser tabs
- [ ] Close unnecessary applications
- [ ] Clear browser history/cache
- [ ] Use incognito/private window for clean demo
- [ ] Make sure both backend and frontend are running
- [ ] Test all features work correctly

### 2. Prepare Test Data
- [ ] Have a test email ready (e.g., demo@example.com)
- [ ] Have a test password ready (e.g., password123)
- [ ] Plan what todos you'll create

### 3. Screen Recording Setup
- [ ] Use screen recording software (Windows Game Bar, OBS, etc.)
- [ ] Set recording quality to 720p or 1080p
- [ ] Test audio is muted (no voiceover needed)
- [ ] Position browser window clearly visible

## Recording Script

Follow this exact sequence for your demo:

### Part 1: User Authentication (30 seconds)

1. **Show Sign Up Page**
   - Navigate to http://localhost:5173
   - Click "Sign Up"
   - Fill in:
     - Name: "Demo User"
     - Email: "demo@example.com"
     - Password: "password123"
   - Click "Sign Up"
   - Wait for redirect to home page

2. **Show Logout**
   - Click "Logout" button
   - Verify redirect to sign in page

3. **Show Sign In**
   - Enter email: "demo@example.com"
   - Enter password: "password123"
   - Click "Sign In"
   - Wait for redirect to home page

### Part 2: Adding Todos (45 seconds)

4. **Create First Todo**
   - In the form at top:
     - Title: "Buy groceries"
     - Description: "Milk, eggs, bread"
   - Click "Add Todo"
   - Wait for todo to appear in list

5. **Create Second Todo**
   - Title: "Finish project"
   - Description: "Complete the todo app assignment"
   - Click "Add Todo"
   - Wait for todo to appear

6. **Create Third Todo**
   - Title: "Exercise"
   - Description: "30 minutes workout"
   - Click "Add Todo"
   - Wait for todo to appear

### Part 3: Listing Todos (15 seconds)

7. **Show All Todos**
   - Scroll through the list
   - Show all three todos are visible
   - Pause for 2-3 seconds

### Part 4: Updating Todos (45 seconds)

8. **Edit First Todo**
   - Click "Edit" on "Buy groceries"
   - Change title to: "Buy groceries and snacks"
   - Change description to: "Milk, eggs, bread, chips, cookies"
   - Click "Save"
   - Wait for update to reflect

9. **Mark Todo as Complete**
   - Click checkbox on "Finish project"
   - Show the todo gets strikethrough
   - Pause for 2 seconds

10. **Mark Todo as Incomplete**
    - Click checkbox again on "Finish project"
    - Show the strikethrough is removed
    - Pause for 2 seconds

### Part 5: Deleting Todos (30 seconds)

11. **Delete First Todo**
    - Click "Delete" on "Buy groceries and snacks"
    - Wait for todo to disappear

12. **Delete Second Todo**
    - Click "Delete" on "Finish project"
    - Wait for todo to disappear

13. **Show Remaining Todo**
    - Show only "Exercise" remains
    - Pause for 2 seconds

### Part 6: Final Demonstration (15 seconds)

14. **Create One More Todo**
    - Title: "Demo completed"
    - Click "Add Todo"

15. **Mark as Complete**
    - Click checkbox
    - Show completion

16. **End Recording**
    - Pause for 2 seconds
    - Stop recording

## Total Time: ~3 minutes

## Recording Tips

### Do's ✅
- Move mouse slowly and deliberately
- Pause briefly after each action
- Make sure text is readable
- Show loading states
- Keep browser window maximized
- Use a clean, simple background

### Don'ts ❌
- Don't rush through steps
- Don't talk (no voiceover needed)
- Don't show personal information
- Don't show errors (test first!)
- Don't use real email addresses
- Don't include background music

## Screen Recording Tools

### Windows
**Option 1: Windows Game Bar (Built-in)**
- Press `Win + G`
- Click record button
- Press `Win + Alt + R` to stop

**Option 2: OBS Studio (Free)**
- Download: https://obsproject.com/
- More control over quality
- Professional results

### Alternative Tools
- ShareX (Free, Windows)
- Loom (Free, Web-based)
- Camtasia (Paid)
- ScreenFlow (Mac, Paid)

## After Recording

### 1. Review Your Video
- [ ] Watch entire video
- [ ] Check all features are shown
- [ ] Verify video quality is good
- [ ] Ensure no personal info visible
- [ ] Check video length (3-5 minutes ideal)

### 2. Edit if Needed
- Trim beginning/end if needed
- Cut out any mistakes
- Keep it simple and clear

### 3. Upload to Google Drive

**Step-by-step:**
1. Go to https://drive.google.com
2. Click "New" → "File upload"
3. Select your video file
4. Wait for upload to complete
5. Right-click the video
6. Click "Get link"
7. Change "Restricted" to "Anyone with the link"
8. Click "Copy link"

### 4. Test the Link
- Open link in incognito window
- Verify video plays
- Verify no sign-in required
- If it asks for permission, link is NOT public!

### 5. Add Link to README
- Open `README.md`
- Find "Demo Video" section
- Replace placeholder with your link:
```markdown
## Demo Video

[Watch Demo Video](https://drive.google.com/file/d/YOUR_FILE_ID/view)
```

## Video Checklist

Before submitting, verify your video shows:
- [ ] User sign up
- [ ] User sign in
- [ ] Adding a todo (with title and description)
- [ ] Adding multiple todos
- [ ] Listing all todos
- [ ] Updating a todo (editing)
- [ ] Marking todo as completed
- [ ] Marking todo as not completed
- [ ] Deleting a todo
- [ ] Clean, professional presentation
- [ ] No errors or issues
- [ ] Good video quality
- [ ] Reasonable length (3-5 minutes)

## Common Video Mistakes

### ❌ Mistake 1: Private Link
**Problem:** Video link requires sign-in
**Solution:** Change sharing to "Anyone with the link"

### ❌ Mistake 2: Too Fast
**Problem:** Actions happen too quickly
**Solution:** Pause 1-2 seconds after each action

### ❌ Mistake 3: Poor Quality
**Problem:** Text is blurry or unreadable
**Solution:** Record at 720p minimum, maximize browser

### ❌ Mistake 4: Missing Features
**Problem:** Forgot to show a required feature
**Solution:** Follow the script exactly

### ❌ Mistake 5: Showing Errors
**Problem:** Features don't work during recording
**Solution:** Test everything before recording

## Example Video Structure

```
0:00 - 0:30  Sign up and authentication
0:30 - 1:15  Adding todos
1:15 - 1:30  Listing todos
1:30 - 2:15  Updating todos
2:15 - 2:45  Deleting todos
2:45 - 3:00  Final demonstration
```

## Quality Standards

Your video should be:
- **Clear**: All text readable
- **Complete**: All features shown
- **Concise**: 3-5 minutes
- **Clean**: No errors or issues
- **Professional**: Smooth, deliberate actions

## Final Checklist

Before uploading:
- [ ] Video shows all required features
- [ ] Video quality is good
- [ ] No personal information visible
- [ ] No errors in the demo
- [ ] Video length is appropriate
- [ ] File size is reasonable (under 100MB)

After uploading:
- [ ] Link is public
- [ ] Link tested in incognito
- [ ] Link added to README
- [ ] Link works from different device

## Need Help?

If you have issues:
1. Test all features before recording
2. Do a practice recording first
3. Watch the practice recording
4. Record the final version
5. Test the Google Drive link

Remember: The video doesn't need to be perfect, just clear and complete! 🎥

Good luck! 🚀
