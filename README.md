```markdown
# 📝 To-Do List App

A simple, full-stack To-Do List web application that lets users create, read, update, and delete tasks. Built using **Node.js**, **Express**, **MongoDB**, and **EJS** templating engine.

## 🚀 Features

- Add new tasks with ease
- Edit existing tasks
- Mark tasks as completed
- Delete tasks individually
- Clean and responsive UI
- Data persistence using MongoDB

## 📸 Preview

![App Screenshot](./Screenshot 2025-06-28 at 2.24.32 PM.png) <!-- Replace with actual image or remove -->

## 🛠️ Tech Stack

**Frontend:**  
- HTML5  
- CSS3  
- JavaScript  
- EJS  

**Backend:**  
- Node.js  
- Express.js  
- MongoDB with Mongoose  

## 📂 Project Structure

```

├── public/  
|           # Static files (CSS, images, etc.)
├── views/              # EJS templates
│   └── LIST.ejs        # Express routes (optional if used)
├── index.js              # Main server file
├── package.json
└── README.md

````

## ⚙️ Installation

1. **Clone the repo**

```bash
git clone https://github.com/yourusername/todo-list-app.git
cd todo-list-app
````

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Create a `.env` file and add your MongoDB connection string:

```env

  "mongodb+srv://sanket_cse:ZombyYT123@todolist.ia4reog.mongodb.net/?retryWrites=true&w=majority&appName=TodoList"

```

4. **Run the app**

```bash
npm start
```

Visit `http://localhost:3000` in your browser.

## 📦 Dependencies

* express
* mongoose
* ejs
* dotenv (optional but recommended)
* body-parser

## 📌 Upcoming Features

* User authentication (Login/Signup)
* Task priority and deadlines
* Dark mode 🌙
* Filter tasks (completed / pending)

## 🤝 Contributing

Pull requests are welcome. For major changes, open an issue first to discuss what you’d like to change.

```

1. git add .
2. git commit -m "mention changes"
3. git push origin main 