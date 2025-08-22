*MERN Bookstore App*
A modern and responsive full stack Bookstore application named as "BOOKOnBOARD" built using the MERN Stack (MongoDB, Express.js, React.js, Node.js). This app provides a complete book shopping experience from browsing and carting to checkout and smart suggestions. Designed to be intuitive and personalized, the app also recommends books based on the user's age and genre.

> Key Features
--> Authentication
User Registration, Login, and Logout
Secure routes protected via JWT or Session based authentication

--> Home Page
Clean UI displaying a catalog of books with title, author, price, and image
Add any book to cart in one click
Responsive layout across all devices

--> Shopping Cart 
Real time cart updates add, remove, or update quantities
Detailed order summary
Collects shipping address from user before placing the order

--> Book Suggestions
Enter age and genre to get curated recommendations
Personalized algorithm for different reader types child, teen, adult, etc.
Quick, simple, and interactive book discovery

--> Design & UX
Clean, intuitive, and distraction free layout
Responsive for mobile and desktop views
Error handling and loading states for smoother experience

--> Developer Friendly
Modular component architecture React
RESTful API backend structure
Clear file organization and reusable components
Environment variable support with .env

>Tech Stack
--> Frontend
React.js Hooks
React Router for navigation
Axios for API integration
Pure CSS or Styled Components optional

--> Backend
Node.js with Express.js
MongoDB with Mongoose
JSON Web Token JWT for user authentication
dotenv, cors, body parser, etc.

--> Example API Endpoints
Method	Route	Purpose
POST	/api/auth/register	Register new users
POST	/api/auth/login  	Login with credentials
GET	     /api/books	        Get all books
POST	/api/cart	        Add item to user's cart
POST	/api/checkout	    Submit order with address
POST	/api/suggestions	Get book recommendations

>File Structure 
---> backend/
├── node_modules/
├── src/
│   ├── config/          # Configuration files (e.g. DB connection, JWT setup)
│   ├── controllers/     # Route handler logic for APIs
│   ├── data/            # Static or sample data
│   ├── middleware/      # Custom middleware (e.g. auth, error handling)
│   ├── models/          # Mongoose models for MongoDB
│   └── routes/          # API route definitions
├── sampleData.js        # Seed sample books data
├── seedBooks.js         # Script to insert books into DB
├── server.js            # Entry point for Express server
├── user.js              # (Possibly a route/controller file for user auth)
├── .env                 # Environment variables
├── package.json         # NPM dependencies and scripts
├── package-lock.json    # Lock file for dependency versions


-->frontend/
├── node_modules/
├── public/
│   └── index.html       # Base HTML template
├── src/
│   ├── assets/          # Static images and icons
│   ├── components/      # Reusable UI components
│   ├── pages/           # React pages (e.g. Home, Cart, Login)
│   ├── styles/          # CSS or styling files
│   ├── utils/           # Utility/helper functions
│   ├── App.jsx          # Root React component
│   ├── App.css          # App-level styles
│   ├── index.css        # Global styles
│   ├── main.jsx         # Main entry for React (ReactDOM.render)
│   └── bg.jpg           # Background image asset
├── .gitignore
├── eslint.config.js     # Linting configuration
├── README.md            # Project README file
├── vite.config.js       # Vite configuration
├── package.json
├── package-lock.json


> Future Enhancements
Admin Dashboard Add, edit, or delete books
Payment Integration Stripe
Book Ratings & Reviews
Book Search, Genre Filters
Order History & Invoice generation
Contact or Support Page


> Authors
-->1.*Ishana Dasgupta*
Tech Stack MERN MongoDB, Express, React, Node
GIT hub-https://github.com/ishanaDG26
Email:-ishanadasgupta043@gmail.com
-->2.*Abhinav Singh*
Tech Stack MERN MongoDB, Express, React, Node
GIT hub-https://github.com/Abhinav22singh
Email:-singhabhinav2205@gmail.com

> License
This project is licensed under the MIT License. Feel free to use, modify, and share it.