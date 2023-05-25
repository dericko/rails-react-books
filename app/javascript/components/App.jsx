import React, { useEffect, useState } from "react";
import "./App.css";

const BOOKS_ENDPOINT = `${process.env.REACT_APP_API_URL}/nyt_books`;

const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(BOOKS_ENDPOINT);
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBooks();
  }, []);

  return (
    <div className="BooksContainer">
      <h1>Books</h1>
      {books.map((book) => (
        <a className="Book" key={book.id} href={book.link}>
          <img style={{ width: 75 }} src={book.imageUrl} alt={book.title} />
          <p>{book.title}</p>
          <p>{book.author}</p>
          <p>{book.description}</p>
        </a>
      ))}
    </div>
  );
};

const App = () => {
  return (
    <React.StrictMode>
      <Books />
    </React.StrictMode>
  );
};

export default App;
