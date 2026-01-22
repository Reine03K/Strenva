# Environment Variables Setup Guide

## How to Set Up Your .env File

### Step 1: Create the .env file

In the `backend` directory, create a file named `.env`:

```bash
cd backend
touch .env
```

### Step 2: Generate a JWT Secret

A JWT secret is a random string used to sign and verify JWT tokens. Here are several ways to generate one:

#### Option 1: Using Node.js (Recommended)
```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

#### Option 2: Using OpenSSL
```bash
openssl rand -hex 64
```

#### Option 3: Using Online Generator
Visit: https://generate-secret.vercel.app/64 (or any secure random string generator)

### Step 3: Add Variables to .env

Copy this template into your `.env` file and replace the values:

```env
# MongoDB Connection
MONGODB_URI=mongodb://localhost:27017/icam-talent-platform

# Server Port
PORT=5001

# JWT Configuration
JWT_SECRET=your-generated-secret-key-here
JWT_EXPIRE=7d

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:3000

# Environment
NODE_ENV=development
```

### Example .env File

```env
MONGODB_URI=mongodb://localhost:27017/icam-talent-platform
PORT=5001
JWT_SECRET=da9c68890779000f491c0e2eba5df252a0cc1a85959cfd218d3d91255d1f403cc912ff2f39857f9c2700c15bf5134cb358ece010e13c38843a7b20ec470da799
JWT_EXPIRE=7d
FRONTEND_URL=http://localhost:3000
NODE_ENV=development
```

## Important Notes

1. **Never commit .env to git** - It's already in .gitignore
2. **Use different secrets for development and production**
3. **Keep your JWT_SECRET secure** - Anyone with it can create valid tokens
4. **JWT_EXPIRE formats**: 
   - `7d` = 7 days
   - `24h` = 24 hours
   - `3600` = 3600 seconds (1 hour)

## Where JWT Secret is Used

The JWT secret is used in:
- `backend/src/models/User.js` - For generating tokens
- `backend/src/middleware/auth.middleware.js` - For verifying tokens

## Quick Setup Command

Run this in your terminal (from the backend directory):

```bash
# Generate and create .env file
echo "MONGODB_URI=mongodb://localhost:27017/icam-talent-platform
PORT=5001
JWT_SECRET=$(node -e "console.log(require('crypto').randomBytes(64).toString('hex'))")
JWT_EXPIRE=7d
FRONTEND_URL=http://localhost:3000
NODE_ENV=development" > .env
```
