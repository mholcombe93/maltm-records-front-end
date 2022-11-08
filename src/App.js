import "./App.css";
import Nav from "./components/Nav.jsx";
import Home from "./screens/Home.jsx";
import ArtistSearch from "./screens/ArtistSearch.jsx";
import AlbumSearch from "./screens/AlbumSearch.jsx";
import Albums from "./screens/Albums";
import About from "./screens/About.jsx";
import Genres from "./screens/Genres";
import AddAlbum from "./screens/AddAlbum.jsx"
import React, { useState, useEffect } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import {getArtists} from "./services/artists.js"
import { getAlbums } from "./services/albums.js"


function App() {
  const [artists, setArtists] = useState([]);
  const [albums, setAlbums] = useState([]);
  let { artistID } = useParams();

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
        <Route path="/albums" element={<AlbumSearch albums={albums} artistID={{artistID}}/>} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/genres" element={<Genres />} />
        <Route path="/about" element={<About />} />
        <Route path= "/artists/:artistID/add-album" element = { } />
      </Routes>
    </>
  );
}

export default App;
