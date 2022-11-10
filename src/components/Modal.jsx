import "./styles/Modal.css"
import { Link } from 'react-router-dom'
function Modal({show, onClose, album}) {
  if (!show) {
    return null
  }
  
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
        <div className="modal-exit">
          <button onClick={onClose} className="Xbutton">X</button>
          </div>
          <h1 className= "artist-name">{album.artist.name}</h1>
          <h2 className="album-title">{album.title}</h2>
          <p className="album-year">{album.year}</p>
          <div className="track-list"> Track List:
          <ul>
            {album.songs.map((song) => {
              return <li>{song}</li>
            })}
          </ul>
          </div>
          <Link to={`/artists/edit-album/${album._id}`}>
            <button className="crudButton">Edit/Delete Album</button>
          </Link>
        </div>
      </div>
    </div>
  )

}

export default Modal