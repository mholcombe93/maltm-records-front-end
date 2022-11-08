import { Link } from "react-router-dom";

function FilterCharacter(props) {
  
  return (
    <Link to={`/albums/search/${props.character}`}>
      {`${props.character}`}
     </Link>
    
  )
}

export default FilterCharacter