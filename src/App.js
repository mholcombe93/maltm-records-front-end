import "./App.css";
import Nav from "./components/Nav.jsx";
import Home from "./screens/Home.jsx";
import ArtistSearch from "./screens/ArtistSearch.jsx";
import Albums from "./screens/Albums";
import About from "./screens/About.jsx";
import Genres from "./screens/Genres";
import axios from "axios"
import React, { useState, useEffect } from "react"

import { Routes, Route } from "react-router-dom";

function App() {
  
  
  const URL = "https://b-side-music.up.railway.app/"
  const [call, setCall] = useState([])
  useEffect(() => {
   const callApi =  async () => {
      const response = await axios(URL)
      setCall(response.data)
      console.log(response.data)
  }
     callApi()  
      
  }, [])


  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artists" element={<ArtistSearch />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/genres" element={<Genres />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
