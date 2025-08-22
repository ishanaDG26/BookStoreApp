import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // ✅ Import Footer
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import CartPage from './pages/CartPage';
import ProtectedRoute from './components/ProtectedRoute';
import BookSuggestions from './components/BookSuggestions'; 
import CheckoutPage from './pages/CheckoutPage';
import ReceiptPage from './pages/ReceiptPage';

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/cart" element={<ProtectedRoute><CartPage /></ProtectedRoute>} />
          <Route path="/suggest-books" element={<ProtectedRoute><BookSuggestions /></ProtectedRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/checkout" element={<ProtectedRoute><CheckoutPage /></ProtectedRoute>} />
          <Route path="/receipt" element={<ProtectedRoute><ReceiptPage /></ProtectedRoute>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
      <Footer /> {/* ✅ Add Footer here */}
    </>
  );
};

export default App;
