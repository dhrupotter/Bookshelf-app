import React from "react";
import { books } from "../db/books";
import Book from "../components/Book";

const Explore = ({ shelf, setShelf }) => {
  return (
    <div>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <Book book={book} shelf={shelf} setShelf={setShelf} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Explore;
