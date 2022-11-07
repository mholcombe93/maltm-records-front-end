import React, { useState } from "react";
import Modal from "../components/Modal"
import Image from "../components/Image"

function ArtistSearch() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <h1>Artists</h1>  
      <Image />

      <Modal
          onClose={() => setShowModal(false)}
          show={showModal}
        />
      <button onClick={() => setShowModal(true)}>Get info</button>

      <div className="search-artists">
        <input type="text" placeholder="Search by Artist"></input>
        </div>
       
      </>
  )
}
export default ArtistSearch