import React, { useState } from "react";
import { albums } from "../services/albums"
import FilterCharacter from "./FilterCharacter"


const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z","#"]



function SearchFilter({ albums }) {
  const [character,setCharacter]=useState()

  

  return (
    
    <FilterCharacter character={alphabet[0]} />
    
  )
}

export default SearchFilter
=======
import { artists } from "../services/artists"

const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0"]

function filter({artists}) {
  let alphabet = {};
  


  return (
   console.log(filter)
  )
}

export default filter

