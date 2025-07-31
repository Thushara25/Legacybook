# 📚 LegacyBook

LegacyBook is a full-stack web app that allows users to save, view, and reflect on their most cherished memories. Users can add a memory with a title, description, emoji, and optional image. Images are uploaded securely to Cloudinary, and all memories are stored per user in a PostgreSQL database. The app supports both Light and Dark modes for a personalized experience.

---

## 🚀 Features

- 🔐 Secure JWT authentication
- 📸 Cloudinary image uploads
- 💾 PostgreSQL database storage
- 🌙 Light/Dark theme support
- 🧠 One-click memory deletion
- ✨ Smooth and responsive UI with Tailwind CSS

---

## 🛠 Tech Stack

- **Frontend:** React.js, Tailwind CSS, Axios
- **Backend:** Node.js, Express
- **Database:** PostgreSQL
- **Authentication:** JWT
- **Image Hosting:** Cloudinary
- **Deployment:** Vercel (Frontend), Render (Backend)

---

## 📦 How to Run Locally

### 🧩 Backend Setup

1. Clone the repo:
  
   git clone https://github.com/Thushara25/Legacybook

cd Legacybook

2. Navigate to the backend folder:

cd legacybook-backend

3. Install backend dependencies:

npm install

3. Create a .env file in the backend root:Create a .env file in the legacybook-backend/ directory with the following contents:

PORT=5000
DATABASE_URL=your_postgres_connection_string
JWT_SECRET=your_secret_key

4. Start the backend server:

npm start

This should run on http://localhost:5000.

### 🧩 Frontend Setup

1. Go back to the root project folder 

cd Legacybook

2. Install frontend dependencies:

npm install

3. Start the frontend app:

npm start

The frontend will run on: http://localhost:3000


## 🔐 Test Login Credentials

To access the app, use the following credentials:

- **Username:** `admin`
- **Password:** `admin123`

> These credentials are seeded in the database for testing purposes. Make sure your backend is running and connected to the same PostgreSQL database.


The app should now be running on http://localhost:3000


Live Demo
Frontend: https://legacybook.vercel.app

Backend: https://legacybook.onrender.com

Author
Made with ❤️ by Thushara Balakrishna



