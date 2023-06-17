import React from "react";
import Readbooks from "../components/Readbooks";
import ReadingList from "../components/ReadingList";
import Wishlist from "../components/WishList";

const Home = ({ shelf, setShelf }) => {
  // add states here

  return (
    <div>
      <Readbooks shelf={shelf} books={shelf.alreadyRead} setShelf={setShelf} />
      <ReadingList
        shelf={shelf}
        books={shelf.currentlyReading}
        setShelf={setShelf}
      />
      <Wishlist shelf={shelf} books={shelf.wishlist} setShelf={setShelf} />
    </div>
  );
};

export default Home;
