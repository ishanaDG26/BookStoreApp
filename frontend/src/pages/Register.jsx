import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../utils/api";
import "../styles/Register.css";



const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/users/register', { name, email, password });
      localStorage.setItem('user', JSON.stringify(res.data));
      alert('Registration Successful');
      navigate('/');
    } catch (err) {
      console.error('Registration Error:', err);
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <h2>Create an Account</h2>

      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button type="submit">Register</button>

      <p>Already have an account? <Link to="/login">Login here</Link></p>
    </form>
  );
};

export default Register;
