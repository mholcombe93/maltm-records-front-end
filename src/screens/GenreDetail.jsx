import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function GenreDetail({ artists }) {
  const [artistsList, setArtistsList] = useState([]);

  const { genre_option } = useParams()

  useEffect(() => {
    let filteredList = artists.filter((artist) => {
      console.log(artist.genre)
      return artist.genre.includes(genre_option)
    })

    setArtistsList(filteredList)
  }, [genre_option]);


  return (
    <div>
        <h1 className="center">{genre_option}</h1>
      {artistsList.map((artist) => (
        <div>
          <h2>{artist.name}</h2>
        </div>
      ))}

      <Link to='/genres'>
        <h2>Back to GENRES</h2>
      </Link>
    </div>
  )
}

export default GenreDetail;
