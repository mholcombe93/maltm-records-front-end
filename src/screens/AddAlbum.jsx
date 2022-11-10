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

  const handleSubmit = async (e) => {
    e.preventDefault()
    await createAlbum(album)
    setToggleApiCall(prev => !prev)
    navigate(`/artists/${artistID}`, {replace: true})
  }

  return (
  <>
    <h1> Add Album</h1>
    <form onSubmit={handleSubmit}>
    <input
      placeholder="Enter Title"
      name="title"
      value={album.title}
      onChange={handleChange}
    />
    <input
      placeholder="Enter Album Image"
      name="albumCover"
      value={album.albumCover}
      onChange={handleChange}
    />
    <input
      placeholder="Enter song"
      name="songs"
      value={album.songs}
      onChange={handleChange}
    />
    <input
      placeholder="Enter Year"
      name="year"
      value={album.year}
      onChange={handleChange}
        />
        
    <button type="submit">Submit</button>
      </form>
      </>
  )
}

export default AddAlbum