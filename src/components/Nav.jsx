import "./Nav.css"
import { NavLink } from "react-router-dom"
import cassette from "../images/cassette-tape-no-title.png"

function Nav() {
  return (
    <div className="nav-bar-component">
      <div className="title-logo">
      <NavLink to="/"><img src={cassette} alt="cassette logo" className="cassette-logo" /></NavLink><h1>B-Side Music</h1>
      </div>
      <div className="nav">
          <div className="navlink"><NavLink to="/artists">Artists</NavLink></div>
          <div className="navlink"><NavLink to="/albums">Albums</NavLink></div>
          <div className="navlink"><NavLink to="/genres">Genres</NavLink></div>
        <div className="navlink"><NavLink to="/songs">Songs</NavLink></div>
        <div className="navlink"><NavLink to="/about">About</NavLink></div>
      </div>
 </div>
    
  )
}

export default Nav