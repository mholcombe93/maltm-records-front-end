import React, { useState } from "react";
import Modal from "../components/Modal"

function ArtistSearch() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <h1>Artists</h1>  
      <div className="search-artists">
        <input type="text" placeholder="Search by Artist"></input>
        </div>
      <Modal
          onClose={() => setShowModal(false)}
          show={showModal}
        />
        <button onClick={() => setShowModal(true)}>Get info</button>
       
      </>
  )
}
export default ArtistSearch