import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getArtist } from "../services/artists.js";
import "../App.css"

function ArtistDetail() {
  const [artist, setArtist] = useState({});
  const [artistName, setArtistName] = useState("")

  const { artistID } = useParams();

  useEffect(() => {
    const fetchArtist = async () => {
      const response = await getArtist(artistID);
      setArtist(response);
      const res = await getArtist(artistName)
      setArtistName(res)
    };
    fetchArtist();
  }, []);

  return (
    <div>
      <h1 className="artist-name">{artist.name}</h1>
      <p>{artist.genre}</p>
      <div>
        <img src={artist.artistImg} className="gallery-pic" />
        </div>
        
      

      <Link to={`/artists/${artist._id}/add-album`}>
        <button className="crudButton">Add Album</button>
      </Link>
      <Link to={`/artists/${artist._id}/edit-album`}>
        <button className="crudButton">Edit Album</button>
      </Link>
      <Link to={`/artists/${artist._id}/delete-album`}>
        <button className="crudButton">Delete Album</button>
      </Link>
    </div>
  );
}

export default ArtistDetail;
