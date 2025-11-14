# API Documentation

Base URL: `http://localhost:5000/api`

## Authentication Endpoints

### 1. Sign Up
Create a new user account.

**Endpoint:** `POST /auth/signup`

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

**Success Response (201):**
```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

**Error Response (400):**
```json
{
  "success": false,
  "message": "User already exists"
}
```

---

### 2. Sign In
Login with existing credentials.

**Endpoint:** `POST /auth/signin`

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Success Response (200):**
```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

**Error Response (401):**
```json
{
  "success": false,
  "message": "Invalid credentials"
}
```

---

### 3. Forgot Password
Request a password reset email.

**Endpoint:** `POST /auth/forgot-password`

**Request Body:**
```json
{
  "email": "john@example.com"
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Email sent"
}
```

**Error Response (404):**
```json
{
  "success": false,
  "message": "User not found"
}
```

---

### 4. Reset Password
Reset password using the token from email.

**Endpoint:** `PUT /auth/reset-password/:resetToken`

**Request Body:**
```json
{
  "password": "newpassword123"
}
```

**Success Response (200):**
```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "message": "Password reset successful"
}
```

**Error Response (400):**
```json
{
  "success": false,
  "message": "Invalid or expired token"
}
```

---

## Todo Endpoints

All todo endpoints require authentication. Include the JWT token in the Authorization header:
```
Authorization: Bearer <your_jwt_token>
```

### 5. Get All Todos
Retrieve all todos for the authenticated user.

**Endpoint:** `GET /todos`

**Headers:**
```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Success Response (200):**
```json
{
  "success": true,
  "data": [
    {
      "_id": "507f1f77bcf86cd799439011",
      "userId": "507f1f77bcf86cd799439012",
      "title": "Buy groceries",
      "description": "Milk, eggs, bread",
      "completed": false,
      "createdAt": "2024-11-14T10:30:00.000Z",
      "updatedAt": "2024-11-14T10:30:00.000Z"
    },
    {
      "_id": "507f1f77bcf86cd799439013",
      "userId": "507f1f77bcf86cd799439012",
      "title": "Finish project",
      "description": "Complete the todo app",
      "completed": true,
      "createdAt": "2024-11-14T09:00:00.000Z",
      "updatedAt": "2024-11-14T11:00:00.000Z"
    }
  ]
}
```

---

### 6. Create Todo
Create a new todo item.

**Endpoint:** `POST /todos`

**Headers:**
```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Request Body:**
```json
{
  "title": "Buy groceries",
  "description": "Milk, eggs, bread"
}
```

Note: `description` is optional.

**Success Response (201):**
```json
{
  "success": true,
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "userId": "507f1f77bcf86cd799439012",
    "title": "Buy groceries",
    "description": "Milk, eggs, bread",
    "completed": false,
    "createdAt": "2024-11-14T10:30:00.000Z",
    "updatedAt": "2024-11-14T10:30:00.000Z"
  }
}
```

---

### 7. Update Todo
Update an existing todo item.

**Endpoint:** `PUT /todos/:id`

**Headers:**
```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Request Body:**
```json
{
  "title": "Buy groceries and snacks",
  "description": "Milk, eggs, bread, chips",
  "completed": true
}
```

Note: All fields are optional. Only include fields you want to update.

**Success Response (200):**
```json
{
  "success": true,
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "userId": "507f1f77bcf86cd799439012",
    "title": "Buy groceries and snacks",
    "description": "Milk, eggs, bread, chips",
    "completed": true,
    "createdAt": "2024-11-14T10:30:00.000Z",
    "updatedAt": "2024-11-14T12:00:00.000Z"
  }
}
```

**Error Response (404):**
```json
{
  "success": false,
  "message": "Todo not found"
}
```

---

### 8. Delete Todo
Delete a todo item.

**Endpoint:** `DELETE /todos/:id`

**Headers:**
```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Todo deleted successfully"
}
```

**Error Response (404):**
```json
{
  "success": false,
  "message": "Todo not found"
}
```

---

## Error Responses

All errors follow this format:

```json
{
  "success": false,
  "message": "Error description"
}
```

### Common HTTP Status Codes

- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `404` - Not Found
- `500` - Internal Server Error

---

## Authentication Flow

1. User signs up or signs in
2. Server returns JWT token
3. Client stores token (localStorage)
4. Client includes token in Authorization header for protected routes
5. Server validates token and processes request

---

## Testing with cURL

### Sign Up
```bash
curl -X POST http://localhost:5000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","password":"password123"}'
```

### Sign In
```bash
curl -X POST http://localhost:5000/api/auth/signin \
  -H "Content-Type: application/json" \
  -d '{"email":"john@example.com","password":"password123"}'
```

### Create Todo
```bash
curl -X POST http://localhost:5000/api/todos \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN_HERE" \
  -d '{"title":"Buy groceries","description":"Milk, eggs, bread"}'
```

### Get Todos
```bash
curl -X GET http://localhost:5000/api/todos \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

### Update Todo
```bash
curl -X PUT http://localhost:5000/api/todos/TODO_ID_HERE \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN_HERE" \
  -d '{"completed":true}'
```

### Delete Todo
```bash
curl -X DELETE http://localhost:5000/api/todos/TODO_ID_HERE \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

---

## Testing with Postman

1. Import the endpoints into Postman
2. Create an environment variable for `token`
3. After signin/signup, save the token to the environment
4. Use `{{token}}` in Authorization headers

---

## Error Logging

All backend errors are automatically logged to MongoDB in the `errorlogs` collection with:
- Error message
- Stack trace
- API endpoint
- HTTP method
- User ID (if authenticated)
- Timestamp

You can view error logs in MongoDB Atlas or using MongoDB Compass.
