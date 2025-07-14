# Simple Blog API

A RESTful API for a simple blog system built with Express and TypeScript.

## Overview
This API allows you to manage blog posts and users. It supports CRUD operations for posts and fetching posts by user.

## Base URL
```
http://localhost:3333/api
```

---

## Endpoints

### Posts

#### Get All Posts
- **URL:** `/posts`
- **Method:** `GET`
- **Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "string",
      "title": "string",
      "content": "string",
      "author": { "id": "string", "username": "string" },
      "createdAt": "ISODate",
      "updatedAt": "ISODate"
    }
  ],
  "count": 1
}
```

#### Get Post by ID
- **URL:** `/posts/:id`
- **Method:** `GET`
- **Response:**
```json
{
  "success": true,
  "data": {
    "id": "string",
    "title": "string",
    "content": "string",
    "author": { "id": "string", "username": "string" },
    "createdAt": "ISODate",
    "updatedAt": "ISODate"
  }
}
```
- **Error Response:**
```json
{
  "success": false,
  "message": "Post not found"
}
```

#### Create Post
- **URL:** `/posts`
- **Method:** `POST`
- **Body:**
```json
{
  "title": "string",
  "content": "string",
  "authorId": "string"
}
```
- **Response:**
```json
{
  "success": true,
  "data": {
    "id": "string",
    "title": "string",
    "content": "string",
    "authorId": "string",
    "createdAt": "ISODate",
    "updatedAt": "ISODate"
  }
}
```
- **Error Response:**
```json
{
  "success": false,
  "message": "Title, content, and authorId are required"
}
```

#### Update Post
- **URL:** `/posts/:id`
- **Method:** `PUT`
- **Body:**
```json
{
  "title": "string",
  "content": "string"
}
```
- **Response:**
```json
{
  "success": true,
  "data": {
    "id": "string",
    "title": "string",
    "content": "string",
    "authorId": "string",
    "createdAt": "ISODate",
    "updatedAt": "ISODate"
  }
}
```
- **Error Response:**
```json
{
  "success": false,
  "message": "Post not found"
}
```

#### Delete Post
- **URL:** `/posts/:id`
- **Method:** `DELETE`
- **Response:**
```json
{
  "success": true,
  "message": "Post deleted successfully"
}
```
- **Error Response:**
```json
{
  "success": false,
  "message": "Post not found"
}
```

---

### Users

#### Get Posts by User
- **URL:** `/users/:id/posts`
- **Method:** `GET`
- **Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "string",
      "title": "string",
      "content": "string",
      "authorId": "string",
      "createdAt": "ISODate",
      "updatedAt": "ISODate"
    }
  ],
  "count": 1
}
```
- **Error Response:**
```json
{
  "success": false,
  "message": "User not found"
}
```

---

## Error Handling
- All error responses follow the format:
```json
{
  "success": false,
  "message": "Error message here"
}
```

## Notes
- All dates are in ISO 8601 format.
- No authentication is implemented by default.
- All endpoints return JSON.

---

## Getting Started
1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the development server:
   ```sh
   npm run dev
   ```
3. The API will be available at `http://localhost:3333/api`.

---
