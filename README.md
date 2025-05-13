# 📝 MERN Task Manager with Categories

This is a full-stack task management application built using the **MERN stack (MongoDB, Express, React, Node.js)**. It allows users to:

- Create, view, and delete tasks
- Categorize tasks with custom categories
- View tasks by category
- Store data in MongoDB (tasks and categories in separate collections)

---

## 📁 Project Structure

To-Do-with-category/
├── client/ # React frontend
├── server/ # Express + Node backend
└── README.md

---

## 🚀 Features

- ✅ Create and delete categories
- ✅ Create and delete tasks with title, description, and associated category
- ✅ View list of tasks and categories
- ✅ Clean UI with React + Axios integration
- ✅ REST API using Express + MongoDB (via Mongoose)

---

## 🧰 Tech Stack

- **Frontend:** React, Axios
- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **Tooling:** Git, npm

---

## 🔧 Setup Instructions

### 📦 Backend

1. Navigate to the `server/` directory:
   ```bash
   cd server
Install dependencies:
npm install
Create a .env file and add your MongoDB connection URI:
MONGODB_URI=your_mongodb_connection_string
Start the backend server:
node server.js

💻 Frontend
Navigate to the client/ directory:

cd client
Install dependencies:

npm install
Start the React app:

npm start
The frontend runs on http://localhost:3000

📬 API Endpoints
Categories
GET /api/categories — Get all categories

POST /api/categories — Create a new category

Tasks
GET /api/tasks — Get all tasks

POST /api/tasks — Create a new task

DELETE /api/tasks/:id — Delete a task
📸 Screenshots

🧠 Future Improvements
✅ Edit tasks and categories

✅ Filter tasks by category

⏳ Add due dates, priority, and user authentication

⏳ Deploy to Vercel (frontend) & Render (backend)

👨‍💻 Author
Suvansh Sharma
GitHub Profile

📄 License
This project is open source and free to use under the MIT License.

---

Let me know if you'd like me to:

- Add real screenshots
- Include a live deployment link (Vercel/Render)
- Generate a `.gitignore` and `LICENSE` file for you

Would you also like a `package.json` template for the backend if it's missing?
