import React, { useEffect } from "react";
import { useBookState } from "../../stores/book.store";
import { Link } from "react-router-dom";

function Index() {
  const { books, fetchBooks } = useBookState();
  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return (
    <>
      <h2>Book List</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <Link to={`/book/${book.id}`}>{book.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Index;
