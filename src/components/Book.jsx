import React from "react";

const Book = ({ book, shelf, setShelf }) => {
  const handleClick = (newBook, shelfName) => {
    const filteredShelf = Object.keys(shelf).reduce((acc, curr) => {
      console.log(curr, shelfName, acc);
      if (curr === shelfName) {
        return { ...acc, [shelfName]: [...acc[shelfName], newBook] };
      } else {
        return {
          ...acc,
          [curr]: acc[curr].filter((book) => book.id !== newBook.id),
        };
      }
    }, shelf);
    console.log(filteredShelf);
    setShelf(filteredShelf);
  };
  return (
    <div>
      <p>Name: {book.name}</p>
      <p>Description: {book.description}</p>
      <p>Rating: {book.rating}</p>
      <button onClick={() => handleClick(book, "alreadyRead")}>
        Move to 'Read'
      </button>
      <button onClick={() => handleClick(book, "currentlyReading")}>
        Move to 'Currently Reading'
      </button>
      <button onClick={() => handleClick(book, "wishlist")}>
        Move to 'Read later'
      </button>
    </div>
  );
};

export default Book;
