import "./styles/Modal.css"

function Modal({show, onClose, album}) {
  if (!show) {
    return null
  }
  
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h1>{album.artist.name}</h1>
          <h2 className="modal-title">{album.title}</h2>
          <p>{album.year}</p>
          <div className="track-list"> Track List
          <ul>
            {album.songs.map((song) => {
              return <li>{song}</li>
            })}
          </ul>
          </div>
        </div>
        <div className="modal-body">
        <img className="gallery-pic" src={album.albumCover } />
        </div>
        
        <div className="modal-footer">
          <button onClick={onClose} className="button">Close</button>
        </div>
      </div>
    </div>
  )

}

export default Modal