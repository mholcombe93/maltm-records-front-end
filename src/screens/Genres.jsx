import "../App.css";
import { Link } from "react-router-dom";

function Genres() {
  return (
    <>
      <h1>Genres</h1>
      <div className="gallery">
        <section className="genre">
          <Link to={"/genre/R&B"}>
            <div className="genre-gallery RnB">R&B</div>
          </Link>
          <Link to={"/genre/Soul"}>
            <div className="genre-gallery Soul">Soul</div>
          </Link>
          <Link to={"/genre/Alternative"}>
            <div className="genre-gallery Alt">Alternative</div>
          </Link>
          <Link to={"/genre/Rock"}>
            <div className="genre-gallery Rock">Rock</div>
          </Link>
          <Link to={"/genre/K-Pop"}>
            <div className="genre-gallery K">K-Pop</div>
          </Link>
          <Link to={"/genre/Punk"}>
            <div className="genre-gallery Punk">Punk</div>
          </Link>
          <Link to={"/genre/Hip-Hop"}>
            <div className="genre-gallery Hip-Hop">Hip-Hop</div>
          </Link>
          <Link to={"/genre/Rap"}>
            <div className="genre-gallery Rap">Rap</div>
          </Link>
          <Link to={"/genre/Pop"}>
            <div className="genre-gallery Pop">Pop</div>
          </Link>
          <Link to={"/genre/Electronic"}>
            <div className="genre-gallery Elec">Electronic</div>
          </Link>
          <Link to={"/genre/Jazz"}>
            <div className="genre-gallery Jazz">Jazz</div>
          </Link>
          <Link to={"/genre/EDM"}>
            <div className="genre-gallery EDM">EDM</div>
          </Link>
        </section>
      </div>
    </>
  );
}

export default Genres;
