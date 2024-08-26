# ReachInbox Web App

## Overview

This web application was built using React for the frontend and Node.js with Express for the backend. The application includes features like Google login, thread management, keyboard shortcuts, and a customizable theme.

## Features

- **Google Login**: Users can log in with their Google account.
- **Thread Management**: View, delete, and reply to threads.
- **Keyboard Shortcuts**: Quick actions using keyboard shortcuts.
- **Theme Switcher**: Toggle between light and dark mode.
- **Text Editor**: Custom text editor with variable insertion.

### Steps

1. Clone the repository to your local machine.
   ```bash
   git clone <repository-url>

2. Navigate to the project directory.
   ```bash
   cd ReachInbox

3. Install Backend Dependencies:
* Navigate to the backend directory.
   ```bash
   cd backend
   
* Install the necessary packages using npm.
   ```bash
   npm install

4. Install Frontend Dependencies:
* Navigate to the `frontend` directory.
  ```bash
  cd ../frontend

5. Start the Backend Server:
* Navigate back to the backend directory if not already there.
  ```bash
  cd ../backend

* Start the server using Node.js or Nodemon (if installed).
# Using Node.js
node server.js

# Or, if you have Nodemon installed
nodemon server.js 

6. Start the Frontend Development Server:
* Navigate back to the `frontend` directory.
  ```bash
  cd ../frontend

* Start the development server.
  ```bash
   npm start

7. Open the Application:
   * Open your web browser and navigate to http://localhost:3000 to view the application.
  

**Configuration**
* Backend API URL:

Make sure the backend API URL is correctly set in the frontend's environment configuration if needed. This is typically done in an .env file or directly in the code.

* Google OAuth Credentials:

Set up your Google OAuth credentials and update the backend configuration to use them for Google login functionality.


**Usage**
* Login:
Click the "Login with Google" button on the login page to authenticate using your Google account.

* Thread Management:
After logging in, you will be redirected to the thread management page where you can view, delete, and reply to threads.

* Keyboard Shortcuts:
Use keyboard shortcuts like D to delete a selected thread and R to reply to a thread.

* Theme Switching:
Click the "Switch to Dark Mode" or "Switch to Light Mode" button to toggle between light and dark themes.

**Contributing**
* **Fork the Repository**: Fork the repository on GitHub.
* **Create a Branch**: Create a new branch for changes.
* **Make Changes**: Implementing changes and testing them.
* **Submit a Pull Request**: Open a pull request to merge changes into the main branch.


