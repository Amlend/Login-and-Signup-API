# Login-and-Signup-API

## Overview

This API provides functionality for creating and authenticating users. It uses MongoDB as the database and validates user input.

## Sign-up API

## Request

- **Method**: `POST`
- **Path**: `/signup`
- **Body**:

  - **firstName**: The user's first name (required)
  - **lastName**: The user's last name (required)
  - **email**: The user's email address (required)
  - **password**: The user's password (required)

## Response

- **Status Code**: 201 (Created)
- **Body**:

  - **message**: A success message indicating that the user was created successfully

## Login API

## Request

- **Method**: `POST`
- **Path**: `/login`
- **Body**:

  - **email**: The user's email address (required)
  - **password**: The user's password (required)

## Response

- **Status Code**: 200 (OK)
- **Body**:

  - **token**: A JSON Web Token (JWT) for authentication
  - **message**: A success message indicating that the user was logged in successfully

## Error Handling

- **Status Code**: 400 (Bad Request)

  - **Body**:

    - **message**: An error message indicating that a required field is missing or invalid

- **Status Code**: 401 (Unauthorized)

  - **Body**:

    - **message**: An error message indicating that the email or password is invalid

- **Status Code**: 500 (Internal Server Error)

  - **Body**:

    - **message**: An error message indicating that the server encountered an unexpected error

## Running the application

**Prerequisites:**

- Node.js and npm installed on your system.

**Steps:**

- Clone or download the application codebase.

- Navigate to the project directory in your terminal.

- Install dependencies:

```
npm install
```

```
npm start
```

This will typically start the server on a port like localhost:3000 (check the code for the specific port).

## Notes

- The API uses bcrypt for password hashing and JWT for authentication.
- The API validates user input to prevent common errors.
- The API handles errors by returning JSON responses with specific error messages.
