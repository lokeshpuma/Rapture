# Rapture - Social Media Mobile App

A full-stack social media mobile application built with React Native (Expo) and Node.js/Express backend.

## Project Structure

```
Rapture/
├── backend/          # Node.js/Express API server
│   ├── src/
│   │   ├── config/   # Configuration files (db, cloudinary, arcjet)
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   └── server.js
│   └── package.json
│
└── mobile/           # Expo/React Native mobile app
    ├── app/          # App screens and navigation
    ├── components/   # Reusable UI components
    ├── hooks/        # Custom React hooks
    ├── utils/        # Utility functions
    └── package.json
```

## Tech Stack

### Mobile App
- **Framework**: Expo Router
- **UI**: NativeWind (Tailwind CSS for React Native)
- **State Management**: TanStack Query
- **Authentication**: Clerk
- **Navigation**: React Navigation
- **API Calls**: Axios

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: Clerk
- **Image Upload**: Cloudinary
- **Security**: Arcjet

## Getting Started

### Prerequisites
- Node.js (v18+)
- npm or yarn
- MongoDB URI
- Clerk Account (for authentication)
- Cloudinary Account (for image uploads)

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file with the following variables:
```env
PORT=3000
NODE_ENV=development
MONGODB_URI=your_mongodb_uri
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
ARCJET_ENV=development
ARCJET_KEY=your_arcjet_key
```

4. Start the backend server:
```bash
npm run dev
```

### Mobile App Setup

1. Navigate to mobile directory:
```bash
cd mobile
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```env
EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
EXPO_PUBLIC_API_URL=http://localhost:3000/api
```

4. Start the development server:
```bash
npx expo start
```

## Running the App

After starting the mobile development server:

- **Physical Device**: Scan the QR code with Expo Go (Android) or Camera app (iOS)
- **Web**: Press `w` in the terminal
- **iOS Simulator**: Press `i` (requires Xcode)
- **Android Emulator**: Press `a` (requires Android Studio)

## Available Scripts

### Backend
```bash
npm run dev    # Start with hot reload
npm start      # Start production server
```

### Mobile
```bash
npm start           # Start Expo Metro bundler
npm run android     # Open in Android emulator
npm run ios         # Open in iOS simulator
npm run web         # Open in web browser
npm run reset-project # Reset the project template
```

## Features
- User authentication with Clerk
- Social feed with posts
- Image uploads via Cloudinary
- Comments and likes
- Real-time notifications
- Dark mode support

