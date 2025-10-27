PLP Task Manager

A responsive and interactive Task Manager App built with React.js, Tailwind CSS, and Vite.
This project demonstrates React component architecture, state management with hooks, context-based theming, and API integration — all wrapped in a clean, modern UI.

🚀 Features
🧩 Component Architecture

Reusable Button, Card, Navbar, and Footer components.

Organized structure for maintainability and scalability.

Consistent styling with Tailwind utility classes.

⚙️ State Management & Hooks

Add, complete, delete, and filter tasks (All, Active, Completed).

Custom useLocalStorage hook for task persistence.

Theme context using useContext for light/dark mode.

useState and useEffect for dynamic UI updates.

🌐 API Integration

Fetches posts from JSONPlaceholder API
.

Displays loading and error states.

Supports pagination and page switching.

🎨 Tailwind Styling

Fully responsive design for mobile, tablet, and desktop.

Light/Dark mode with smooth transitions.

Hover effects and subtle animations for an engaging experience.

🛠️ Technologies Used
Category	Tools
Frontend Framework	React.js (with Vite)
Styling	Tailwind CSS
State Management	React Hooks (useState, useEffect, useContext)
API	JSONPlaceholder
Deployment	Vercel / Netlify
Version Control	Git & GitHub
📁 Folder Structure
src/
 ┣ components/
 ┃ ┣ Navbar.jsx
 ┃ ┣ Footer.jsx
 ┃ ┣ Button.jsx
 ┃ ┣ Card.jsx
 ┃ ┗ TaskManager.jsx
 ┣ hooks/
 ┃ ┗ useLocalStorage.js
 ┣ pages/
 ┃ ┗ ApiData.jsx
 ┣ App.jsx
 ┗ main.jsx

⚙️ Setup Instructions

Clone your repository

git clone <your-github-repo-url>
cd plp-task-manager


Install dependencies

npm install


Run the development server

npm run dev


Open the app
Visit the URL shown in your terminal (e.g., http://localhost:5173).

🌍 Deployment

Deploy easily to Vercel, Netlify, or GitHub Pages.

Vercel Deployment

Go to vercel.com
.

Import your GitHub repository.

Click Deploy — Vercel will automatically build your app.

Netlify Deployment

Go to netlify.com
.

Drag and drop your dist/ folder (after running npm run build).

Or connect your GitHub repo and deploy automatically.

🖼️ Screenshots
Feature	Screenshot
Dashboard (Light Mode)	

Dashboard (Dark Mode)	

Task Manager	

API Data Section	


💡 Learning Outcomes

Built reusable and styled React components.

Managed complex UI state using React hooks.

Integrated REST API data into a React project.

Implemented responsive UI and dark mode using Tailwind CSS.

Deployed a modern React app to a live environment.

👨🏽‍💻 Author

Olamide Samuel Wahab
Frontend Developer | React Enthusiast
📍 Lagos, Nigeria
📧 wahabolamide466@gmail.com


📄 License

This project is for educational purposes under the PLP React.js Module Assignment.
