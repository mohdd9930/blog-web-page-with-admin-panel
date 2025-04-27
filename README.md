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

Admins can moderate comments (approve, delete)

👤 User Profiles

Users can upload and update their profile pictures

🔒 Authentication and Authorization 

Secure login for Admins

Session management

📸 Image Uploads

Upload images for blog posts

Upload profile images for users

🛠️ Tech Stack
Frontend: React.js / HTML / CSS / JavaScript

Backend: Node.js / Express.js

Database: MongoDB 

Authentication: JWT 

File Uploads: Multer 


🚀 Setup Instructions
Clone the repository

bash
Copy
Edit
git clone https://github.com/mohdd9930/blog-web-page-with-admin-panel.git
Navigate into the project folder

bash
Copy
Edit
cd blog-web-page-with-admin-panel
Install Frontend Dependencies

bash
Copy
Edit
cd Frontend
npm install
npm run dev

bash
Copy
Edit
cd Backend
npm install
npm run dev

Create a .env file in the Backend folder.

Add variables like:

bash
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
Run the Frontend and Backend

# In Backend folder
npm start

# In Frontend folder
npm start
