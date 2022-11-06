import "./App.css";
import Nav from "./components/Nav.jsx";
import Home from "./screens/Home.jsx";
import ArtistSearch from "./screens/ArtistSearch.jsx";
import Albums from "./screens/Albums";
import Songs from "./screens/Songs";
import About from "./screens/About.jsx";
import Genres from "./screens/Genres";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artists" element={<ArtistSearch />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/Songs" element={<Songs />} />
        <Route path="/genres" element={<Genres />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
