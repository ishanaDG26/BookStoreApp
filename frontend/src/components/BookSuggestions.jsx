import React, { useState } from 'react';
import axios from 'axios';
import '../styles/BookSuggestions.css';

const BookSuggestions = () => {
  const [age, setAge] = useState('');
  const [genre, setGenre] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!age || !genre) {
      setError('Please provide both age and genre.');
      return;
    }

    setLoading(true);
    setError('');
    setSuggestions([]);

    try {
      const res = await axios.get(`/api/books/suggestions`, {
        params: { age, genre },
      });

      console.log('🔍 Raw response from backend:', res.data);

      // Ensure the response is an array before setting it
      if (Array.isArray(res.data) && res.data.length > 0) {
        setSuggestions(res.data);
      } else {
        setError('No matching books found for the selected genre and age.');
      }
    } catch (err) {
      console.error('❌ API error:', err);
      setError(
        err.response?.data?.message ||
        'Failed to fetch suggestions. Please check your connection or try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h2 className="text-center">Book Suggestions</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="age">Your Age</label>
          <input
            type="number"
            id="age"
            placeholder="e.g. 12"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>

        <div className="form-control">
          <label htmlFor="genre">Preferred Genre</label>
          <input
            type="text"
            id="genre"
            placeholder="e.g. Fantasy, Mystery"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="primary-btn">
          Get Suggestions
        </button>
      </form>

      {loading && <p className="text-center">Loading suggestions...</p>}
      {error && <p className="text-center" style={{ color: 'red' }}>{error}</p>}

      {!loading && suggestions && suggestions.length > 0 && (
        <>
          <h3 className="text-center">Recommended Books:</h3>
          <div className="flex">
            {suggestions.map((book) => (
              <div className="card" key={book._id}>
                <h4>{book.title}</h4>
                <p><strong>Author:</strong> {book.author}</p>
                <p><strong>Genre:</strong> {book.genre}</p>
                {book.ageGroup && <p><strong>Age Group:</strong> {book.ageGroup}+</p>}
                {book.description && <p>{book.description}</p>}
    
             
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default BookSuggestions;
