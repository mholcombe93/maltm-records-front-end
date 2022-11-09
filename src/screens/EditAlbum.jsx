import { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

import { deleteAlbum , updateAlbum, getAlbum } from '../services/albums.js'


function EditAlbum() {
  const [album, setAlbum] = useState({
    title: "",
    artist: "",
    albumCover: "",
    songs: [],
    year: 0
  })
  
  const {  albumID  } = useParams()
  let navigate = useNavigate()

  useEffect(() => {
    const fetchAlbum = async () => {
      let oneAlbum = await getAlbum(albumID)
      setAlbum(oneAlbum)
    }
  
    fetchAlbum()
  }, [albumID])

  const handleChange = (e) => {
    const { name, value } = e.target

      setAlbum((prev) => ({
        ...prev,
        [name]: value
      }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await updateAlbum(album._id, album)
    navigate(`/artists/${album.artist._id}`, {replace: true})
  }

  return (
    <>
    <h1>Edit Album</h1>
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
    {/* <input
      placeholder="Enter song"
      name="songs"
      value={album.songs}
      onChange={handleChange}
    /> */}
    <input
      placeholder="Enter Year"
      name="year"
      value={album.year}
      onChange={handleChange}
    />
    <button type="submit">Submit</button>
      </form>
      <button onClick={async () => {
          await deleteAlbum(album._id)
          navigate("/albums", {replace: true})
        }}>
          Delete Album
        </button>
      </>
  )
}

export default EditAlbum