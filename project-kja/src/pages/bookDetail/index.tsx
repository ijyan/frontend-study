import React from "react";
import { useParams } from "react-router-dom";
import { useBookState } from "../../stores/book.store";

function Index() {
  const { bookId } = useParams<{ bookId: string }>();
  const { books } = useBookState();

  const bookIdNumber = bookId ? parseInt(bookId, 10) : null;
  const book =
    bookIdNumber !== null
      ? books.find((item) => item.id === bookIdNumber)
      : null;

  if (!book) {
    return <div>Book not Found</div>;
  }

  return (
    <>
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>{book.description}</p>
    </>
  );
}

export default Index;
