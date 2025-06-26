# 📚 Library Backend API

This is a **Node.js + Express.js** backend project designed to manage a simple library system with user authentication and book management features.

---

## 🔧 Tech Stack

- **Node.js** – Runtime environment  
- **Express.js** – Web framework  
- **MySQL** – Relational database  
- **Sequelize** – ORM for MySQL  
- **JWT (jsonwebtoken)** – Authentication  
- **bcrypt** – Password hashing  

---

## 📦 Features

### 🔐 Authentication
- User registration with hashed passwords  
- User login with JWT token generation  

### 📚 Book Management
- Add, update, delete, and retrieve books  
- Only authenticated users can manage books  

---

## ⚙️ Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/kyashwanth02/library-backend.git
cd library-backend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup MySQL Database
- Make sure MySQL is installed and running  
- Create a database named: `library_db`

```sql
CREATE DATABASE library_db;
```

### 4. Configure database in `config/db.js`
Update the MySQL username, password, and database name if different.

### 5. Run the server
```bash
node server.js
```
Server will start on `http://localhost:5000`

---

## 📬 API Endpoints

### 🔐 Auth
- `POST /api/auth/register` – Register a new user  
- `POST /api/auth/login` – Login and get JWT token  

### 📚 Books (JWT required)
- `GET /api/books` – Get all books  
- `POST /api/books` – Add a new book  
- `PUT /api/books/:id` – Update a book  
- `DELETE /api/books/:id` – Delete a book  

📌 Pass JWT token in headers:
```
Authorization: Bearer <your_token>
```

---

## 🗃️ Project Structure
```
backendproject 1/
├── config/
│   └── db.js
├── controllers/
│   ├── authController.js
│   └── bookController.js
├── middleware/
│   └── authMiddleware.js
├── models/
│   ├── user.js
│   └── book.js
├── routes/
│   ├── authRoutes.js
│   └── bookRoutes.js
├── server.js
└── package.json
```

---

## 👤 Author

**GitHub**: [kyashwanth02](https://github.com/kyashwanth02)

Feel free to fork and enhance the project!
