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

export const addUser = (user) => {
  if (!user.picture)
    user.picture = `https://picsum.photos/200/300?random=${Math.random()}`;

  if (user.id) {
    return axios.put(`${apiUrl}/${user.id}`, user);
  }
  return axios.post(`${apiUrl}`, user);
};
