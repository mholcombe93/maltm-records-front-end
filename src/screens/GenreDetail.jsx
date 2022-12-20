import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import ArtistImage from "../components/ArtistImage";

function GenreDetail({ artists }) {
  const [artistsList, setArtistsList] = useState([]);

  const { genre_option } = useParams()

  useEffect(() => {
    let filteredList = artists.filter((artist) => {
      return artist.genre.includes(genre_option)
    })

    setArtistsList(filteredList)
  }, [genre_option]);

// console.log(artists)
  return (
    <div>
        <h1 className="center">{genre_option}</h1>
        <div className="gallery">
      {artistsList.map((artist, index) => (
          <Link to={`/artists/${artist._id}`}> 
          <ArtistImage key={index} artist={artist} />
        </Link>
          ))}
          </div>

      <Link to='/genres'>
        <h2>Back to GENRES</h2>
      </Link>
    </div>
  )
}

export default GenreDetail;
