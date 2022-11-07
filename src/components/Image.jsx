function Image(props) {
  return (
    <>
      <div>
        <img src={props} className="gallery-pic" alt ="Artist Image" />
      </div>
    </>
  )
}

export default Image