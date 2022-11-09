import React, { useState } from "react";
import { albums } from "../services/albums"
import FilterCharacter from "./FilterCharacter"


const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z","#"]



function SearchFilter({ albums }) {
  const [character,setCharacter]=useState("")

  

  return (
        
      <FilterCharacter character={alphabet[0]} />
      
  )
}

export default SearchFilter


