import "./Nav.css"
import { NavLink } from "react-router-dom"
import cassette from "../images/cassette-tape-no-title.png"

function Nav() {
  return (
    <>
       <h1>B-Side Music</h1>
      <div className="nav">
      <NavLink to="/"><img src={cassette} alt="cassette logo" className="cassette-logo"/></NavLink>
       <div className="navlink"> <NavLink to="/artists">Artists</NavLink></div>
      <div className="navlink"><NavLink to="/albums">Albums</NavLink></div>
      <div className="navlink"><NavLink to="/genres">Genres</NavLink></div>
      <div className="navlink"><NavLink to="/songs">Songs</NavLink></div>
      </div>
 </>
    
  )
}

export default Nav