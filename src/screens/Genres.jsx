import "../App.css";
import { Link } from "react-router-dom";

function Genres() {
  return (
    <>
      <h1>Genres</h1>
      <div className="gallery">
        <section className="genre">
          <Link to={"/genre/R&B"}>
            <div className="genre-gallery">R&B</div>
          </Link>
          <Link to={"/genre/Soul"}>
            <div className="genre-gallery">Soul</div>
          </Link>
          <Link to={"/genre/Alternative"}>
            <div className="genre-gallery">Alternative</div>
          </Link>
          <Link to={"/genre/Rock"}>
            <div className="genre-gallery">Rock</div>
          </Link>
          <Link to={"/genre/K-pop"}>
            <div className="genre-gallery">K-Pop</div>
          </Link>
          <Link to={"/genre/Punk"}>
            <div className="genre-gallery">Punk</div>
          </Link>
          <Link to={"/genre/Hip-Hop"}>
            <div className="genre-gallery">Hip-Hop</div>
          </Link>
          <Link to={"/genre/Rap"}>
            <div className="genre-gallery">Rap</div>
          </Link>
          <Link to={"/genre/Pop"}>
            <div className="genre-gallery">Pop</div>
          </Link>
          <Link to={"/genre/Electronic"}>
            <div className="genre-gallery">Electronic</div>
          </Link>
          <Link to={"/genre/Jazz"}>
            <div className="genre-gallery">Jazz</div>
          </Link>
          <Link to={"/genre/EDM"}>
            <div className="genre-gallery">EDM</div>
          </Link>
        </section>
      </div>
    </>
  );
}

export default Genres;
