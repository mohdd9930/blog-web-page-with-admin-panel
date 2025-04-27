Blog Web Page with Admin Panel
This project is a Full-Stack Blog Application with a powerful Admin Panel.
It supports full CRUD operations for blog posts, user comments, and profile image uploads.

✨ Features
📝 CRUD Operations for Blog Posts

Create new blog posts

Read and display blog posts

Update existing blog posts

Delete unwanted blog posts

💬 Comments Section

Users can comment on blog posts

Admins can moderate (approve or delete) comments

👤 User Profiles

Users can upload and update their profile pictures

🔒 Authentication and Authorization

Secure login for Admins

Session management using JWT

📸 Image Uploads

Upload images for blog posts

Upload and update profile images for users

🛠️ Tech Stack
Frontend: React.js / HTML / CSS / JavaScript

Backend: Node.js / Express.js

Database: MongoDB

Authentication: JWT (JSON Web Tokens)

File Uploads: Multer (for handling images)

🚀 Setup Instructions
1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/mohdd9930/blog-web-page-with-admin-panel.git
2. Navigate into the Project Folder
bash
Copy
Edit
cd blog-web-page-with-admin-panel
3. Install Backend Dependencies
bash
Copy
Edit
cd Backend
npm install
4. Install Frontend Dependencies
bash
Copy
Edit
cd ../Frontend
npm install
5. Set Environment Variables
Create a .env file inside the Backend folder and add the following:

bash
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
Replace your_mongodb_connection_string and your_jwt_secret with your actual values.

6. Run the Backend Server
bash
Copy
Edit
cd Backend
npm run dev
7. Run the Frontend Server
Open a new terminal window and run:

bash
Copy
Edit
cd Frontend
npm start
