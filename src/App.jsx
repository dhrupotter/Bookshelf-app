import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [shelf, setShelf] = useState({
    alreadyRead: [],
    currentlyReading: [],
    wishlist: [],
  });

  console.log(shelf);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home shelf={shelf} setShelf={setShelf} />} />
        <Route
          path="/explore"
          element={<Explore shelf={shelf} setShelf={setShelf} />}
        />
      </Routes>
    </div>
  );
}

export default App;
