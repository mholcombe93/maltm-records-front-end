import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios"

const URL = ""

function apiCall() {
  axios.get(URl)
    .then(res => {
      console.log(res)
    })
    .catch(error => {
      console.log(err)
    })
}

apiCall()




// let headers = new Headers({ Accept: "application/json" });
// const url = "";


// const [artist, setArtist] = useState([]);

// const fetchArtists = async () => {
//   try {
//     const response = await fetch(url, { method: "GET", headers: headers });
//     const Artist = await response.json();
//     setArtist(artist);
//   } catch (error) {
//     console.log("error", error);
//   }
// };

// useEffect(() => { fetchArtists() }, []) // makes componeents render AFTER api is called

// return (
  
// )
// }