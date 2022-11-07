import React, { useState } from "react";
import Modal from "../components/Modal"
import Image from "../components/Image"
import Searchbar from "../components/Searchbar";

function ArtistSearch() {
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <h1>Artists</h1>  
      <Searchbar setSearchTerm={setSearchTerm} />
      <Image />
      <Modal
          onClose={() => setShowModal(false)}
          show={showModal}
        />
      <button onClick={() => setShowModal(true)}>Get info</button>
      </>
  )
}
export default ArtistSearch