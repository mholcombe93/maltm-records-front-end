import api from "./apiConfig.js";

export const getAlbums = async () => {
  try {
    const response = await api.get("/albums");
    return response.data;
  } catch (error) {
    throw error;
  }
};

// export const getStudent = async (id) => {
//   try {
//     const response = await api.get(`/students/${id}`);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

// export const createStudent = async (studentData) => {
//   try {
//     const response = await api.post("/students", studentData);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

// export const updateStudent = async (id, studentData) => {
//   try {
//     const response = await api.put(`/students/${id}`, studentData);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

// export const deleteStudent = async (id) => {
//   try {
//     const response = await api.delete(`/students/${id}`);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };
