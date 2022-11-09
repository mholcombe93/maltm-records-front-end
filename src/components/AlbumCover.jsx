import { useState, useEffect } from "react"
import { getAlbum } from "../services/albums.js";
import Modal from "./Modal"

function AlbumCover ({album_id}) {
  const [showModal, setShowModal] = useState(false);
  const [album, setAlbum] = useState({})


  useEffect(() => {
    const fetchAlbum = async () => {
      const response = await getAlbum(album_id)
      setAlbum(response)
    }
    fetchAlbum()
  }, [album_id])

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