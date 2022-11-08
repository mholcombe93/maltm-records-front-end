
function ArtistImage({artist}) {
  return (
    <>
      <div className="image">
      <img src={artist.artistImg} className="gallery-pic" alt="Artist Image" />
      </div>
    </>
  )
}

export default ArtistImage