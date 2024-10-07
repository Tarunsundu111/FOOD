Food App - MERN Stack
Description
The Food App is a full-stack web application built using the MERN stack (MongoDB, Express.js, React, and Node.js). The app features an admin panel for managing food items and orders, as well as a user panel for browsing and ordering food. It integrates payment via Stripe and includes a responsive design for a seamless experience across devices.
Features
Admin Panel:
Add Foods: Admins can add new food items to the menu.
View Foods: List all available food items.
Remove Foods: Delete food items from the menu.
Manage Orders: View and update the status of customer orders.
Order Status Updates: Change the status of ongoing orders (e.g., in preparation, out for delivery).
User Panel:
User Authentication: Secure login and signup using JWT.
Cart: Add food items to a shopping cart and review the cart before checkout.
Stripe Integration: Secure payments using Stripe.
Order History: View current and past orders, including status updates.
Food Filtering: Search and filter food items by categories.
Food Listings: Browse a list of available food items from various restaurants.
Responsive Design: Optimized for mobile, tablet, and desktop.
Database:
MongoDB Integration: The database is structured into three collections:
Users: Stores user credentials and information.
Orders: Stores order details, status, and payment information.
Foods: Stores details of available food items.
Technologies Used
Frontend:
React.js (UI Framework)
Redux (State Management)
Axios (HTTP Client)
CSS3 (for styling)
Backend:
Node.js with Express (Server)
MongoDB (Database)
JWT (JSON Web Tokens for authentication)
Bcrypt (Password encryption)
Other Tools:
Stripe (Payment Gateway)
Thunderclient (API Testing)
Postman (Alternative API Testing)
Git and GitHub (Version Control)
API Endpoints
/api/auth: User login and signup
/api/food: Manage and fetch food items
/api/orders: Manage and track orders
/api/cart: Handle cart operations
Future Enhancements
Add user reviews and ratings for food items.
Implement social media logins (Google, Facebook).
Introduce delivery tracking for users.
