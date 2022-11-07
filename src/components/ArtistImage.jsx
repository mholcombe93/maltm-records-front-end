import { useState } from "react"
import Modal from "./Modal"

function ArtistImage({artist}) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
       <div className="image">
      <img src={artist.artistImg} className="gallery-pic" alt="Artist Image" onClick={() => setShowModal(true)} />
      <Modal
        onClose={() => setShowModal(false)}
        show={showModal}
        name={artist.name}
        />
      </div>
    </>
  )
}

export default ArtistImage