# Plainfy

A RESTful API built with Express.js and MongoDB for managing todos with secure user authentication, featuring email verification and password reset via OTP.

---

## ✨ Features

- **User Authentication**  
  - ✅ Register with email verification (OTP sent via email)  
  - ✅ Login with JWT token  
  - ✅ Forgot/Reset password with OTP  
  - ✅ Role-based access control (protected routes)  

- **Todo Management**  
  - ✅ Create, read, update, and delete todos  
  - ✅ Priority levels (low, medium, high)  
  - ✅ Custom color tagging and due dates  
  - ✅ Filtering and sorting capabilities  

---

## 🛠️ Installation

1. **Clone the repository**  
   ```bash
   git clone https://github.com/MAHMOUDELSAYED7/plainfy.git
   cd plainfy
   ```

2. **Install dependencies**  
   ```bash
   npm i express mongoose bcryptjs jsonwebtoken nodemailer cors dotenv
   ```

3. **Environment Setup**  
   Create a `.env` file with:  
   ```env
   PORT=your_port
   MONGO_URI=your_mongo_uri
   JWT_SECRET=your_ultra_secure_secret
   EMAIL_USER=your.email@gmail.com
   EMAIL_PASS=your_gmail_app_password
   ```

4. **Start the server**  
   ```bash
   npm start
   ```

---

## 🔧 Environment Variables

| Variable       | Required | Default   | Description                          |
|----------------|----------|-----------|--------------------------------------|
| `PORT`         | No       | -         | API server port                      |
| `MONGO_URI`    | Yes      | -         | MongoDB connection string            |
| `JWT_SECRET`   | Yes      | -         | Secret for signing JWT tokens        |
| `EMAIL_USER`   | Yes      | -         | Gmail address for OTP delivery       |
| `EMAIL_PASS`   | Yes      | -         | Gmail app password                   |

---

## 📚 API Documentation

### 🔐 Authentication Routes

| Endpoint                    | Method | Body Requirements          | Description                     |
|-----------------------------|--------|----------------------------|---------------------------------|
| `/api/auth/register`        | POST | `username, email, password`  | Register new user + send OTP    |
| `/api/auth/verify-otp`      | POST | `email, otp`                 | Verify email address            |
| `/api/auth/login`           | POST | `email, password`            | Get JWT token                   |
| `/api/auth/forgot-password` | POST | `email`                      | Initiate password reset         |
| `/api/auth/reset-password`  | POST | `email, otp, newPassword`    | Complete password reset         |

### 📝 Todo Routes (Require JWT in Header)

| Endpoint          | Method | Parameters           | Description                     |
|-------------------|--------|----------------------|---------------------------------|
| `/api/todo`       | POST   | `title` (required)   | Create new todo                 |
| `/api/todo`       | GET    | -                    | Get all user's todos            |
| `/api/todo/:id`   | PATCH  | `id` + update fields | Update specific todo            |
| `/api/todo/:id`   | DELETE | `id`                 | Delete todo by ID               |

**Sample Todo Creation Request:**
```json
    {
        "title": "Test New Deployment",
        "description": "Perform end-to-end testing of the new deployment before it goes live.",
        "priority": "medium",
        "color": "#FFA500",
        "completed": false,
        "dueDate": "2025-03-25T02:05:24.425Z",
        "id": "67dbb0d8393db0d93e837210",
        "createdAt": "2025-03-20T06:08:24.425Z"
    }
```

---

## 🗂️ Project Structure

```
plainfy/
├── src/
│   ├── controllers/       # Business logic
│   │   ├── auth_controller.js
│   │   └── todo_controller.js
│   ├── middleware/        # Auth middleware
│   │   └── auth.js
│   ├── models/            # MongoDB schemas
│   │   ├── user.js
│   │   └── todo.js
│   ├── routes/            # API endpoints
│   │   ├── auth_routes.js
│   │   └── todo_routes.js
│   └── app.js             # Server configuration
├── .env                   # Environment variables
└── package.json           # Dependency management
```

---
###📦 Dependencies

| Package       | Purpose                          | npm Link                                                                 |
|---------------|----------------------------------|--------------------------------------------------------------------------|
| **Express**   | Web framework                    | [express](https://www.npmjs.com/package/express)                         |
| **Mongoose**  | MongoDB ORM                      | [mongoose](https://www.npmjs.com/package/mongoose)                       |
| **BcryptJS**  | Password hashing                 | [bcryptjs](https://www.npmjs.com/package/bcryptjs)                       |
| **JSONWebToken** | Authentication tokens         | [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)               |
| **Nodemailer** | Email delivery for OTP         | [nodemailer](https://www.npmjs.com/package/nodemailer)                   |
| **CORS**      | Cross-origin resource sharing    | [cors](https://www.npmjs.com/package/cors)                               |
| **Dotenv**    | Environment variable management  | [dotenv](https://www.npmjs.com/package/dotenv)                           |

---

## ⚠️ Important Notes

1. **Email Configuration**  
   - Requires a Gmail account with "Less Secure Apps" enabled or an app-specific password (if 2FA is enabled).  
   - Update `EMAIL_USER` and `EMAIL_PASS` in `.env` for OTP delivery.  

2. **Security**  
   - Keep `.env` out of version control (add to `.gitignore`).  
   - Use HTTPS and secure JWT secrets in production.  

3. **Database**  
   - Replace `MONGO_URI` with your MongoDB connection string (e.g., MongoDB Atlas for cloud hosting).  

---

## 📄 License

MIT License - See [LICENSE](LICENSE) for details.

---
## Contact

For any questions or feedback, please reach out via email: [mahmoudelsayed.dev@gmail.com](mahmoudelsayed.dev@gmail.com)
