# E-Commerce Project

![Product Page](https://user-images.githubusercontent.com/117166487/280651647-a8598f32-f639-4a92-bf75-5b1c0f3f3d8a.png)

## Overview

This project is an E-Commerce site designed for small businesses to showcase and sell their products. It's built with the MERN (MongoDB, Express, React, Node.js) stack and features Stripe as the payment gateway.

## Project Setup and Functionality

The project is organized into two main folders: `client` and `server`.

### Client

- **Frontend**: Built using React for a responsive user interface.
- **Data Fetching**: Axios is employed for server data retrieval.
- **Product Display**: Utilizes React components to showcase products with images and descriptions.
- **Shopping Cart**: Features client-side cart management, allowing users to add, view, and modify product selections.

### Server

- **Backend**: Developed with Node.js and Express for high scalability and performance.
- **Database**: MongoDB serves as the backend database, providing robust and efficient data storage for product information.
- **APIs**: RESTful APIs facilitate product management and order processing.
- **Payment Integration**: Stripe integration ensures secure and seamless payment transactions for customers.

## Setup

1. Clone this repository to your local environment.

2. Navigate to the `client` folder and run the following commands:

   ```
   cd client
   npm install
   npm start
   ```

3. In a separate terminal, navigate to the `server` folder and run the following commands:

   ```
   cd server
   npm install
   npm start
   ```

4. **Setting up Environment Variables:**

   - **Client**:

     - Inside the `client` folder, create a `.env` file if it doesn't already exist.
     - Add the following environment variable to the `.env` file:

     ```plaintext
     REACT_APP_API_URL=http://localhost:5000/api/v1
     ```

   - **Server**:

     - Inside the `server` folder, create a `.env` file if it doesn't already exist.
     - Add the following environment variables to the `.env` file:

     ```plaintext
     MONGODB_URL=your_mongodb_connection_url
     STRIPE_SECRET_KEY=your_stripe_secret_key
     STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
     ```

     Replace `your_mongodb_connection_url`, `your_stripe_secret_key`, and `your_stripe_publishable_key` with your actual credentials.

5. You can access the e-commerce site in your browser at `http://localhost:3000`.

## Support and Feedback

For any questions, issues, or feedback, please don't hesitate to reach out. Feel free to open a Pull Request if you'd like to contribute to the project.
