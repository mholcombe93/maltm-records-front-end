import { useState } from "react"
import Modal from "./Modal"

function AlbumCover ({album}) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
       <div className="image">
      <img src={album.albumCover} className="gallery-pic" alt="Album Cover" onClick={() => setShowModal(true)} />
      <Modal
        onClose={() => setShowModal(false)}
        show={showModal}
          album={album}
        />
      </div>
    </>
  )
}

export default AlbumCover