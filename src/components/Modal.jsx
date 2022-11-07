import "./Modal.css"

function Modal(props) {
  if (!props.show) {
    return null
  }
  return (
    <div className="modal" onClick={props.onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">{props.name}</h2>
        </div>
        <div className="modal-body">
        <p>{props.quote}</p>
        </div>
        
        <div className="modal-footer">
          <button onClick={props.onClose} className="button">Close</button>
        </div>
      </div>
    </div>
  )

}

export default Modal