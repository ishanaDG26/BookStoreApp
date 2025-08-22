import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

  const handleLogout = () => {
    localStorage.removeItem('user');
    alert('Logged out');
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="logo">BookOnBoard</div>
      <div className="nav-links">
        {user && <Link to="/">Home</Link>}
        {user && <Link to="/cart">🛒 Cart ({cartItems.length})</Link>}
        {user &&<Link to="/suggest-books">Suggest Books</Link>}
        {!user && <Link to="/login">Login</Link>}
        {!user && <Link to="/register">Register</Link>}
        {user && <button onClick={handleLogout}>Logout</button>}
      </div>
    </nav>
  );
};

export default Navbar;
