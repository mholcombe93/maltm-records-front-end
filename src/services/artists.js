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
};


export const getAlbums = async () => {
  try {
    const response = await api.get("/albums");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAlbum = async (id) => {
  try {
    const response = await api.get(`/album/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createAlbum = async (albumData) => {
  try {
    const response = await api.post("/album", albumData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateAlbum = async (id, albumData) => {
  try {
    const response = await api.put(`/artists/${id}`, albumData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteAlbum = async (id) => {
  try {
    const response = await api.delete(`/albums/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};




