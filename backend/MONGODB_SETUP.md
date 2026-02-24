# MongoDB Setup Guide

This guide will help you set up MongoDB for your portfolio backend. Choose one of the options below.

## Option 1: MongoDB Atlas (Cloud - Recommended for Beginners)

MongoDB Atlas is a free cloud database service. No installation needed!

### Step 1: Create a MongoDB Atlas Account
1. Go to [https://www.mongodb.com/cloud/atlas/register](https://www.mongodb.com/cloud/atlas/register)
2. Sign up for a free account (or log in if you already have one)

### Step 2: Create a Free Cluster
1. After logging in, click **"Build a Database"**
2. Choose **"M0 FREE"** (Free Shared Cluster)
3. Select a cloud provider and region (choose the closest to you)
4. Click **"Create"** (cluster creation takes 1-3 minutes)

### Step 3: Create Database User
1. In the **"Database Access"** section (left sidebar), click **"Add New Database User"**
2. Choose **"Password"** authentication
3. Enter a username (e.g., `portfolio_user`)
4. Click **"Autogenerate Secure Password"** and **copy the password** (you'll need it!)
5. Click **"Add User"**

### Step 4: Whitelist Your IP Address
1. Go to **"Network Access"** (left sidebar)
2. Click **"Add IP Address"**
3. For development, click **"Add Current IP Address"** (or click **"Allow Access from Anywhere"** and enter `0.0.0.0/0` - less secure but easier for testing)
4. Click **"Confirm"**

### Step 5: Get Your Connection String
1. Go to **"Database"** (left sidebar) → Click **"Connect"** on your cluster
2. Choose **"Connect your application"**
3. Copy the connection string (it looks like: `mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority`)
4. Replace `<password>` with the password you created in Step 3
5. Replace `<dbname>` with your database name (e.g., `portfolio`)

**Example connection string:**
```
mongodb+srv://portfolio_user:MyPassword123@cluster0.xxxxx.mongodb.net/portfolio?retryWrites=true&w=majority
```

### Step 6: Add to Your .env File
Create a `.env` file in the `backend` folder and add:
```env
MONGO_URI=mongodb+srv://portfolio_user:MyPassword123@cluster0.xxxxx.mongodb.net/portfolio?retryWrites=true&w=majority
```

---

## Option 2: Local MongoDB Installation

If you prefer to run MongoDB on your computer:

### Windows Installation

1. **Download MongoDB Community Server**
   - Go to [https://www.mongodb.com/try/download/community](https://www.mongodb.com/try/download/community)
   - Select Windows, download the MSI installer
   - Run the installer and follow the setup wizard
   - Choose "Complete" installation
   - Install MongoDB as a Windows Service (recommended)

2. **Verify Installation**
   - Open Command Prompt or PowerShell
   - Run: `mongod --version` (should show version number)
   - MongoDB should start automatically as a Windows service

3. **Get Your Connection String**
   - Default local connection: `mongodb://127.0.0.1:27017/portfolio`
   - Replace `portfolio` with your preferred database name

4. **Add to Your .env File**
   ```env
   MONGO_URI=mongodb://127.0.0.1:27017/portfolio
   ```

### macOS Installation

1. **Using Homebrew** (easiest):
   ```bash
   brew tap mongodb/brew
   brew install mongodb-community
   brew services start mongodb-community
   ```

2. **Get Your Connection String**
   ```env
   MONGO_URI=mongodb://127.0.0.1:27017/portfolio
   ```

### Linux Installation

1. **Follow MongoDB's official guide:**
   - [https://www.mongodb.com/docs/manual/installation/](https://www.mongodb.com/docs/manual/installation/)

2. **Start MongoDB:**
   ```bash
   sudo systemctl start mongod
   sudo systemctl enable mongod
   ```

3. **Get Your Connection String**
   ```env
   MONGO_URI=mongodb://127.0.0.1:27017/portfolio
   ```

---

## Testing Your Connection

1. **Start your backend:**
   ```bash
   cd backend
   npm install
   npm run dev
   ```

2. **Look for this message:**
   ```
   ✅ MongoDB connected
   ```

3. **If you see an error**, check:
   - Is your `.env` file in the `backend` folder?
   - Is your `MONGO_URI` correct? (no extra spaces, correct password)
   - Is MongoDB running? (for local installation)
   - Is your IP whitelisted? (for Atlas)

4. **Test the API:**
   - Visit: `http://localhost:5000/api/health`
   - Should return: `{"success":true,"message":"Backend is running"}`

---

## Quick Reference

### MongoDB Atlas Connection String Format:
```
mongodb+srv://username:password@cluster.mongodb.net/database_name?retryWrites=true&w=majority
```

### Local MongoDB Connection String Format:
```
mongodb://127.0.0.1:27017/database_name
```

---

## Need Help?

- **MongoDB Atlas Docs:** [https://docs.atlas.mongodb.com/](https://docs.atlas.mongodb.com/)
- **Local MongoDB Docs:** [https://docs.mongodb.com/manual/installation/](https://docs.mongodb.com/manual/installation/)
