import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getArtist } from "../services/artists.js";
import "../App.css"

function ArtistDetail() {
  const [artist, setArtist] = useState({});
  const { artistID } = useParams();

  useEffect(() => {
    const fetchArtist = async () => {
      const response = await getArtist(artistID);
      setArtist(response);
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
        <button className="addAlbumButton">add album</button>
      </Link>
    </div>
  );
}

export default ArtistDetail;
