import React from 'react';
import '../styles/BookCard.css';

const BookCard = ({ book }) => {
  const addToCart = (bookToAdd) => {
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCart = [...existingCart, bookToAdd];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    alert(`${bookToAdd.title} added to cart!`);
  };
   const imageUrl = book.image?.startsWith('http')
    ? book.image
    : `http://localhost:5000/uploads/${book.image}`;

  return (
    <div className="book-card">
      {book.image && <img src={imageUrl} alt={book.title} />}
      <h3>{book.title}</h3>
      <p><strong>Author:</strong> {book.author}</p>
      <p>{book.description}</p>
      <p><strong>Price:</strong> ₹{book.price}</p>
      <p><strong>Stock:</strong> {book.stock}</p>
      <button onClick={() => addToCart(book)}>Add to Cart</button>
    </div>
  );
};

export default BookCard;
