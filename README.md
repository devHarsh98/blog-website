# Blog Website using React and Firebase

A simple blog website built with Vite, React, Firebase Authentication, and Firestore.

## Features

- User authentication with Google Firebase Auth.
- CRUD operations for blog posts.
- Responsive design.

## Setup

1. Clone the repository: `git clone https://github.com/your-username/vite-react-firebase-blog.git`
2. Install dependencies: `npm install`
3. Set up Firebase: Replace the placeholder values in `src/firebase.js` with your Firebase project configuration.
4. Run the app: `npm run dev`

## Usage

- Visit `/login` to sign in with Google.
- Navigate to `/` to view and delete posts.
- Create new posts at `/createpost`.
- Users can only delete their own posts.

## Dependencies

- Vite
- React
- Firebase
- React Router

## Note on Deletion

Posts can only be deleted by the user who created them. Each user can delete their own posts, but not posts created by other users.

## Visit 
