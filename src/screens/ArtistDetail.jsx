import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getArtist } from "../services/artists.js";



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
      <h1>Add Album</h1>
      <h2>{artist.name}</h2>
      

      <Link to={`/artists/${artist._id}/add-album`}>
        <button className="addAlbumButton">add album</button>
      </Link>
    </div>
  );
}

export default ArtistDetail;
