# Incognito-Connect

## Overview
Incognito-Connect is a web application that provides a secure and user-friendly platform for users to share secrets anonymously. The project incorporates user authentication, secret posting functionality, responsiveness across devices, and optional Google OAuth integration for enhanced user experience.

## Features

### User Authentication System

The app employs robust user authentication, covering registration, login, and password recovery, utilizing JWT for enhanced security.

### Secrets Posting Section

The home screen allows users to post secrets with a user-friendly interface, ensuring uniqueness by associating posts with usernames.

### Responsiveness Across Devices

Designed for seamless user experience across devices, leveraging frameworks as Tailwind CSS.
### OAuth Google Integration

Enhanced user experience with optional Google OAuth integration using Firebase for sign-in and sign-up. Successful implementation adds merit.

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

