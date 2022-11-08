import "./App.css";
import Nav from "./components/Nav.jsx";
import Home from "./screens/Home.jsx";
import ArtistSearch from "./screens/ArtistSearch.jsx";
import AlbumSearch from "./screens/AlbumSearch.jsx";
import Albums from "./screens/Albums";
import About from "./screens/About.jsx";
import Genres from "./screens/Genres";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { getArtists } from "./services/artists.js";
import { getAlbums } from "./services/albums.js";
import FilterCharacter from "./components/FilterCharacter.jsx";
import SearchFilter from "./components/SearchFilter";

function App() {
  const [artists, setArtists] = useState([]);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const callApi = async () => {
      const response = await getArtists();
      setArtists(response);
      const res = await getAlbums();
      setAlbums(res);
    };
    callApi();
  }, []);

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artists" element={<ArtistSearch artists={artists} />} />
        <Route path="/albums" element={<AlbumSearch albums={albums} />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/genres" element={<Genres />} />
        <Route path="/about" element={<About />} />
        <Route path="/albums/search" element={<SearchFilter />} />
        <Route path="/albums/search/:character" element={<SearchFilter />} />
      </Routes>
    </>
  );
}

export default App;
