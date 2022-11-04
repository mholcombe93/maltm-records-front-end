import { NavLink } from "react-router-dom"

function Nav() {
  return (
    <div className="nav">
      <NavLink to="/">Home/Logo</NavLink>
      <NavLink to="/artists">Artists</NavLink>
      <NavLink to="/albums">Albums</NavLink>
      <NavLink to="/">Genres</NavLink>
      <NavLink to="/songs">Songs</NavLink>
    </div>
  )
}

export default Nav