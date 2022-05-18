import axios from "axios";

const apiUrl = "http://localhost:3005/users";

export const getAllUsers = () => {
  return axios.get(apiUrl);
};

export const getUserById = (id) => {
  return axios.get(`${apiUrl}/${id}`);
};

export const deleteUser = async (id) => {
  return await axios.delete(`${apiUrl}/${id}`);
};
