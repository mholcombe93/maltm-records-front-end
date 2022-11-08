import { useState } from 'react'
import { useParams} from 'react-router-dom'

function AddAlbum() {

  const { artistID } = useParams()

  const [album, setAlbum] = useState({
    title: "",
    albumCover: "",
    songs: [],
    year: 0,
    artist_id: artistID
  })



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

export default AddAlbum