import React from "react";
import Book from "./Book";

const ReadingList = ({ books, shelf, setShelf }) => {
  return (
    <div>
      <h1>Currently reading </h1>
      {books.length > 0 ? (
        <ul>
          {books.map((book) => (
            <li key={book.id}>
              <Book book={book} shelf={shelf} setShelf={setShelf} />
            </li>
          ))}
        </ul>
      ) : (
        "No books added to currently reading"
      )}
      <hr />
    </div>
  );
};

export default ReadingList;
