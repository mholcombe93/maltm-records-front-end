import api from "./apiConfig.js";

export const getArtists = async () => {
  try {
    const response = await api.get("/artists");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getArtist = async (id) => {
  try {
    const response = await api.get(`/artists/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// export const getArtistName = async () => {
//   try{
//   const response = await api.get()
//   return response.data;
// } catch (error) {
//   throw error;
// }
  
// }

// export const getAlbumName = async () => {
//   try{
//     const response = await api.get()
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// }

export const createArtist = async (artistData) => {
  try {
    const response = await api.post("/artists", artistData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateArtist = async (id, artistData) => {
  try {
    const response = await api.put(`/artists/${id}`, artistData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteArtist = async (id) => {
  try {
    const response = await api.delete(`/artists/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
  //how to delete albums with artist
};





