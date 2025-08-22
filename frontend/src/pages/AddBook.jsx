import React, { useState } from 'react';
import API from '../utils/api';
import '../styles/AddBook.css';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [imageFile, setImageFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user?.token) return alert('❌ Not authorized');

    if (!imageFile) {
      alert('Please select an image');
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('author', author);
    formData.append('price', price);
    formData.append('stock', stock);
    formData.append('image', imageFile);

    try {
      await API.post('/books', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${user.token}`,
        },
      });
      alert('📚 Book added successfully');
      // Clear form fields
      setTitle('');
      setDescription('');
      setAuthor('');
      setPrice('');
      setStock('');
      setImageFile(null);
      document.querySelector('form').reset();
    } catch (err) {
      console.error('Add Book Error:', err);
      alert('❌ Failed to add book');
    }
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <h2>Add Book</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
        min="0"
      />
      <input
        type="number"
        placeholder="Stock"
        value={stock}
        onChange={(e) => setStock(e.target.value)}
        required
        min="0"
      />
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImageFile(e.target.files[0])}
        required
      />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBook;
