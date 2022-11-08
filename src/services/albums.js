import api from "./apiConfig.js";

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
    const response = await api.get(`/albums/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createAlbum = async (albumData) => {
  try {
    const response = await api.post("/albums", albumData);
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
  }// remove from the artist as well in backend
};


