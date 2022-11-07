import { useState } from "react"
import Modal from "./Modal"

function Image(props) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
       <div className="image">
      <img src={props.image} className="gallery-pic" alt="Artist Image" onClick={() => setShowModal(true)} />
      <Modal
        onClose={() => setShowModal(false)}
        show={showModal}
        name={props.name}
        />
      </div>
    </>
  )
}

export default Image