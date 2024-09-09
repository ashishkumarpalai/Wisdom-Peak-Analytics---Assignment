# Wisdom-Peak-Analytics---Assignment

## Description

This is a RESTful API for managing job applications. The system allows users to register, log in, and manage job positions and applicants. The API supports role-based access control (RBAC) where only administrators can create job positions and applicants, while regular users can view jobs and apply for them. The API also allows scheduling interviews for applicants.

## Features

- **User Authentication (JWT-based)**: Users can register and log in.
- **Role-Based Access Control**: 
  - Admins can create, update, and delete jobs and applicants.
  - Regular users can view job listings and apply for jobs.
- **Job Management**: Add, view, and delete job positions.
- **Applicant Management**: Add applicants to specific job positions, update their status, and delete applicants.
- **Interview Scheduling**: Schedule interviews for applicants.
- **Data Validation**: Input data is validated for formats such as email and job IDs.

## Technologies Used

- Node.js
- Express.js
- MySQL/PostgreSQL
- JWT for Authentication
- bcrypt for password hashing

## Requirements

- Node.js
- MySQL 
- Postman (for API testing)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/ashishkumarpalai/Wisdom-Peak-Analytics-Assignment.git
    ```

2. Navigate to the project directory:

    ```bash
    cd Wisdom-Peak-Analytics-Assignment
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

4. Create a `.env` file in the root of the project and add the following environment variables:

    ```bash
    DB_HOST=localhost
    DB_USER=your_db_user
    DB_PASSWORD=your_db_password
    DB_NAME=job_application_db
    JWT_SECRET=your_secret_key
    ```

5. Set up the database:

    - For **MySQL**:

    ```sql
    CREATE DATABASE Wisdom-Peak-Analytics-Assignment;
    ```

6. Start the server:

    ```bash
    npm run dev
    ```

   The server will run on `http://localhost:3307`.

## API Endpoints

### **Authentication**

- **POST /api/auth/register** – Register a new user
    - Request Body: `{ "name": "John", "email": "john@example.com", "password": "password123", "role": "admin" }`
- **POST /api/auth/login** – Log in to receive a JWT
    - Request Body: `{ "email": "john@example.com", "password": "password123" }`

### **Job Management (Admin Only)**

- **POST /api/jobs** – Create a new job position
    - Request Body: `{ "title": "Software Engineer", "department": "Engineering", "description": "Job Description", "openDate": "2024-09-15" }`
- **GET /api/jobs** – Get a list of all job positions

### **Applicant Management**

- **POST /api/applicants** – Create a new applicant for a job (Admin Only)
    - Request Body: `{ "jobId": 1, "name": "Alice", "email": "alice@example.com", "resumeLink": "http://example.com/resume.pdf", "status": "Pending" }`
- **GET /api/applicants?jobId=1** – Get a list of all applicants for a specific job
- **PATCH /api/applicants/{applicantId}** – Update the status of an applicant
    - Request Body: `{ "status": "Interviewed" }`
- **DELETE /api/applicants/{applicantId}** – Delete an applicant

### **Interview Management**

- **POST /api/interviews** – Schedule an interview for an applicant (Admin Only)
    - Request Body: `{ "applicantId": 1, "interviewDate": "2024-09-20", "interviewerName": "John Doe" }`
- **GET /api/interviews?applicantId=1** – Get interview details for a specific applicant

## Database Schema

- **Jobs Table**
    - `id`: Primary Key
    - `title`: Job Title
    - `department`: Department Name
    - `description`: Job Description
    - `open_date`: Opening Date
    - `user_id`: Foreign Key to Users Table

- **Applicants Table**
    - `id`: Primary Key
    - `job_id`: Foreign Key to Jobs Table
    - `name`: Applicant Name
    - `email`: Applicant Email
    - `resume_link`: Resume URL
    - `status`: Application Status

- **Interviews Table**
    - `id`: Primary Key
    - `applicant_id`: Foreign Key to Applicants Table
    - `interview_date`: Date of Interview
    - `interviewer_name`: Name of Interviewer

## Postman Collection

A Postman collection has been included in the repository to test the API endpoints. You can import it into Postman and use it for testing.
[<img src="https://run.pstmn.io/button.svg" alt="Run In Postman" style="width: 128px; height: 32px;">](https://god.gw.postman.com/run-collection/24840024-69168c3d-b734-4653-9047-0586fd6d00cc?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D24840024-69168c3d-b734-4653-9047-0586fd6d00cc%26entityType%3Dcollection%26workspaceId%3De79d346e-6282-4438-8faa-3fb077c1d2e7)<br>
[ Postman Link](https://www.postman.com/altimetry-astronomer-93622011/public/collection/js4drui/wisdom-peak-analytics-assignment?action=share&creator=24840024)

## [Backend Deployment Link](https://wisdom-peak-analytics-assignment.onrender.com)


