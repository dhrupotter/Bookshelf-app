import React from "react";
import Book from "./Book";

const Wishlist = ({ books, shelf, setShelf }) => {
  return (
    <div>
      <h1>Read later </h1>
      {books.length > 0 ? (
        <ul>
          {books.map((book) => (
            <li key={book.id}>
              <Book book={book} shelf={shelf} setShelf={setShelf} />
            </li>
          ))}
        </ul>
      ) : (
        "No books added to Read later"
      )}
      <hr />
    </div>
  );
};

export default Wishlist;
