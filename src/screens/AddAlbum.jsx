import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { createAlbum } from '../services/albums.js'

function AddAlbum({setToggleApiCall}) {

  const { artistID } = useParams()

  const [album, setAlbum] = useState({
    title: "",
    artist: artistID,
    albumCover: "",
    songs: [],
    year: 0
  })

  let navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target

    if (name === "songs") {
      setAlbum((prev) => ({
        ...prev, 
        [name]: [value]
      }))
    } else {
      setAlbum((prev) => ({
        ...prev,
        [name]: value
      }))
    }
    
  }

  const addSong = () => {
    let newField = {songs: []}
  }

  const remove = () => {
    
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await createAlbum(album)
    setToggleApiCall(prev => !prev)
    navigate(`/artists/${artistID}`, {replace: true})
  }
console.log(setAlbum, setAlbum.songs)
  return (
    <>
      <h1> Add Album</h1>
      <br></br>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input
            className="album-input"
            placeholder="Enter Title"
            name="title"
            value={album.title}
            onChange={handleChange}
          />
          <input
            className="album-input"
            placeholder="Enter Album Image Link"
            name="albumCover"
            value={album.albumCover}
            onChange={handleChange}
          />
          <input
            className="album-input"
            placeholder="Enter Year"
            name="year"
            value={album.year}
            onChange={handleChange}
          />
          <div className="song-div">
            <input
              className="song"
              placeholder="Enter song"
              name="songs"
              value={album.songs}
              onChange={handleChange}
            />
            <button className="song" onClick={remove}>
              Remove
            </button>
          </div>
          <button className="add-song" onClick={addSong}>
            Add Another Song
          </button>
          <br></br>
          <button className="submit" type="submit">
            Add Album
          </button>
        </form>
      </div>
    </>
  );

}

export default AddAlbum