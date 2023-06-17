import React from "react";
import Book from "./Book";

const Readbooks = ({ books, shelf, setShelf }) => {
  return (
    <div>
      <h1>Read Books</h1>
      {books.length > 0 ? (
        <ul>
          {books.map((book) => (
            <li key={book.id}>
              <Book book={book} shelf={shelf} setShelf={setShelf} />
            </li>
          ))}
        </ul>
      ) : (
        "No books added to Read books"
      )}{" "}
      <hr />
    </div>
  );
};

export default Readbooks;
