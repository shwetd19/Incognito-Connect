# Incognito-Connect

## Overview
Incognito-Connect is a web application that provides a secure and user-friendly platform for users to share secrets anonymously. The project incorporates user authentication, secret posting functionality, responsiveness across devices, and optional Google OAuth integration for enhanced user experience.

## Features

### User Authentication System

The application implements a robust user authentication system that includes user registration, login, and password recovery functionalities. JSON Web Tokens (JWT) are utilized to enhance security.

### Secrets Posting Section

The home screen of the application features a user-friendly interface for posting secrets. Each user is allowed to share one secret message. The application ensures the uniqueness of each user's post by associating it with the user's username.

### Responsiveness Across Devices

To provide a seamless user experience, the application is designed to be responsive on various devices such as tablets, desktops, and phones. Front-end frameworks like Bootstrap, Material-UI, or Tailwind CSS are employed to achieve responsiveness.

### Optional Enhancement: OAuth Google Integration

For an enhanced user experience, the project offers optional Google OAuth integration. Firebase is used for Google OAuth sign-in and sign-up. Successful implementation of this feature adds an additional merit to the assignment.

## Technologies Used

- MongoDB: Database for storing user information and secret posts.
- ReactJS: Frontend framework for building a dynamic and interactive user interface.
- Firebase: Used for Google OAuth sign-in and sign-up.
- JWT: JSON Web Tokens for secure user authentication.
- Tailwind CSS: Frontend frameworks for achieving responsiveness.

## Installation

1. Clone the repository.
2. Install dependencies using `npm run build` in the root directory.
3. Set up a MongoDB database and configure the connection in the backend.
4. Configure Firebase for Google OAuth integration.
5. Run the application using `npm run dev` in both frontend and backend directories.

## Usage

1. Register or log in using the authentication system.
2. Access the home screen to post a secret message. Only one post per user is allowed, ensuring uniqueness through the username.
3. View secrets shared by other users without revealing their identity.
4. Experience seamless responsiveness across various devices.

## Demonstrating Unique Approach and Understanding

- **Security Measures:** Initially, the project used the 'cors' middleware for security purposes but later opted to remove it.
- **One Post per User:** Implemented a unique approach by associating each user's post with their username. The system checks if a post with the same username exists in the 'posts' table before creating a new post. The user cannot change their username while creating a post.
- **Photo Upload (not implemented):** Although the initial plan included photo uploads for posts, it was deferred due to time constraints.
- **Anonymous Post Display:** While fetching posts created by different users, only the message is retrieved, maintaining the anonymity of the users.

## Contributing

Contributions are welcome! If you have any suggestions or find issues, please create a pull request or submit an issue.

