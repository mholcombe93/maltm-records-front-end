import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArtist } from "../services/artists.js";

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
      <h1> {artist.name}</h1>
      <Link to={`/artists/${artist._id}/add-album`}>
        <button className="addAlbumButton"> add an album to your artist</button>
      </Link>
    </div>
  );
}

export default ArtistDetail;
