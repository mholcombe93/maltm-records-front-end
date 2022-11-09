
function ArtistImage({artist}) {
  return (
    <>
      <div className="image">
        <img src={artist.artistImg} className="gallery-pic" alt="Artist Image" />
        <p>{artist.name}</p>
      </div>
    </>
  )
}

export default ArtistImage