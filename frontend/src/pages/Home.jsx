import React, { useEffect, useState } from 'react';
import API from '../utils/api';
import BookCard from '../components/Bookcard';
import "../styles/Home.css";

const sampleBooks = [
  {
    _id: 'teen1',
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    description: 'In a dystopian future, Katniss Everdeen fights for survival in the deadly Hunger Games.',
    price: 399,
    stock: 10,
    image: 'https://covers.openlibrary.org/b/id/7222246-L.jpg',
  },
  {
    _id: 'teen2',
    title: "Harry Potter and the Sorcerer's Stone",
    author: 'J.K. Rowling',
    description: 'A young boy discovers he is a wizard and begins his journey at Hogwarts.',
    price: 499,
    stock: 12,
    image: 'https://covers.openlibrary.org/b/id/7984916-L.jpg',
  },
  {
    _id: 'teen3',
    title: 'The Fault in Our Stars',
    author: 'John Green',
    description: 'A beautiful and heartbreaking love story between two teens battling illness.',
    price: 350,
    stock: 8,
    image: 'https://m.media-amazon.com/images/I/817tHNcyAgL._UF1000,1000_QL80_.jpg',
  },
  {
    _id: 'teen4',
    title: 'Divergent',
    author: 'Veronica Roth',
    description: 'In a divided society, Tris discovers she doesn’t fit into any one group—she’s Divergent.',
    price: 420,
    stock: 6,
    image: 'https://m.media-amazon.com/images/I/91bxBYl307L._UF1000,1000_QL80_.jpg',
  },
  {
    _id: 'teen5',
    title: "To All the Boys I've Loved Before",
    author: 'Jenny Han',
    description: 'Lara Jean’s secret love letters get mailed out—and chaos (and love) follow.',
    price: 375,
    stock: 9,
    image: 'https://m.media-amazon.com/images/I/91UUpvZPXhL._UF1000,1000_QL80_.jpg',
  },
  {
    _id: 'teen6',
    title: 'Wonder',
    author: 'R.J. Palacio',
    description: 'Auggie, a boy with facial differences, attends a mainstream school for the first time.',
    price: 360,
    stock: 11,
    image: 'https://m.media-amazon.com/images/I/71Q1KDTHXLL.jpg',
  },
  {
    _id: 'teen7',
    title: 'They Both Die at the End',
    author: 'Adam Silvera',
    description: 'Two boys meet on their last day alive and try to live a lifetime in a single day.',
    price: 410,
    stock: 7,
    image: 'https://m.media-amazon.com/images/I/81GNOhflA8L._UF1000,1000_QL80_.jpg',
  },
  {
    _id: 'teen8',
    title: 'One of Us Is Lying',
    author: 'Karen M. McManus',
    description: 'Five students walk into detention. Only four walk out alive. Everyone is a suspect.',
    price: 440,
    stock: 6,
    image: 'https://m.media-amazon.com/images/I/914W0VECGCL._UF1000,1000_QL80_.jpg',
  },
  {
    _id: 'teen9',
    title: 'A Good Girl’s Guide to Murder',
    author: 'Holly Jackson',
    description: 'Pip investigates a closed murder case for a school project—and finds it’s far from over.',
    price: 470,
    stock: 8,
    image: 'https://m.media-amazon.com/images/I/81E3hDPr3eL.jpg',
  },
  {
    _id: 'teen10',
    title: 'It Ends With Us',
    author: 'Colleen Hoover',
    description: 'A powerful story about love, heartbreak, and the difficult choices we make.',
    price: 520,
    stock: 10,
    image: 'https://m.media-amazon.com/images/I/91CqNElQaKL.jpg',
  },
  {
    _id: 'teen11',
    title: 'The Summer I Turned Pretty',
    author: 'Jenny Han',
    description: 'Belly finds herself in a love triangle during a transformative summer.',
    price: 380,
    stock: 11,
    image: 'https://m.media-amazon.com/images/I/31dLioVGogL._UF1000,1000_QL80_.jpg',
  },
  {
    _id: 'teen12',
    title: 'Five Feet Apart',
    author: 'Rachael Lippincott',
    description: 'Two teens with cystic fibrosis fall in love but must stay five feet apart.',
    price: 390,
    stock: 10,
    image: 'https://m.media-amazon.com/images/I/71l01PuzJGL._UF1000,1000_QL80_.jpg',
  },
];

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    API.get('/books')
      .then(res => setBooks(res.data.length ? res.data : sampleBooks))
      .catch(() => setBooks(sampleBooks));
  }, []);

  return (
    <div className="book-list">
      {books.map(book => (
        <BookCard key={book._id} book={book} />
      ))}
    </div>
  );
};

export default Home;
