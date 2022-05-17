import axios from "axios";

const apiUrl = "http://localhost:3005/users";

const getAllUsers = () => {
  return axios.get(apiUrl);
};

export default getAllUsers;
