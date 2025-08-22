import React from "react";
import "../styles/Footer.css"; // ✅ Fixed path

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; 2025 BookOnBoards. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
