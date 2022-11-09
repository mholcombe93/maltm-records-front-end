import { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { createAlbum , updateAlbum } from '../services/albums.js'

function EditAlbum() {

  const { artistID } = useParams()

  const [album, setAlbum] = useState({
    title: "",
    artist: artistID,
    albumCover: "",
    songs: [],
    year: 0
  })

  let navigate = useNavigate()
  let { id } = useParams()

  useEffect(() => {
    const fetchAlbum = async () => {
      let oneAlbum = await getAlbum(id)
      setAlbum(oneAlbum)
    }
  
    fetchAlbum()
  }, [id])

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
    await editAlbum(album)
    navigate(`/artists/${artistID}`, {replace: true})
  }

  return (
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
  )
}

export default EditAlbum