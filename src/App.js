import "./App.css";
import Nav from "./components/Nav.jsx";
import Home from "./screens/Home.jsx";
import ArtistSearch from "./screens/ArtistSearch.jsx";
import AlbumSearch from "./screens/AlbumSearch.jsx";
import About from "./screens/About.jsx";
import Genres from "./screens/Genres";
import SearchFilter from "./components/SearchFilter";
import GenreDetail from "./screens/GenreDetail";
import ArtistDetail from "./screens/ArtistDetail";
import FilterCharacter from "./components/FilterCharacter";
import AddAlbum from "./screens/AddAlbum.jsx";
import EditAlbum from "./screens/EditAlbum";
import React, { useState, useEffect } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import { getArtists } from "./services/artists.js";
import { getAlbums } from "./services/albums.js";


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
        <Route path={`/artists/:artistID`} element={<ArtistDetail />} />
        <Route
          path="/albums"
          element={<AlbumSearch albums={albums} artistID={{ artistID }} />}
        />
        <Route path="/genres" element={<Genres />} />
        <Route path="/about" element={<About />} />
        <Route path="/albums/search" element={<SearchFilter />} />


        <Route path="/albums/search/:letter" element={<FilterCharacter albums={albums} />} />

        <Route path="/genre/:genre_option" element={<GenreDetail artists={artists} />} />
        <Route path= "/artists/:artistID/add-album" element = {<AddAlbum/>} />


        <Route path="/artists/edit-album/:albumID" element={<EditAlbum />} />

      </Routes>
    </>
  );
}

export default App;
