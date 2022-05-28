import axios from "axios";

// const apiUrl = "http://localhost:3005/users";
const apiUrl = "https://62926f7acd0c91932b724671.mockapi.io/Users";

export const getLoggedUser = () => {
  return JSON.parse(localStorage.getItem("loggedUser"));
};

// Method to display all users in RESTful API on page users-list
export const getAllUsers = () => {
  return axios.get(apiUrl);
};
// Method for getting the details of specific user
export const getUserById = (id) => {
  return axios.get(`${apiUrl}/${id}`);
};
// Method for deleting user
export const deleteUser = (id) => {
  return axios.delete(`${apiUrl}/${id}`);
};

// Method for Adding user
export const addUser = (user) => {
  // if there is no picture that is provided it will be assigned random one
  if (!user.picture)
    user.picture = `https://picsum.photos/200/300?random=${Math.floor(
      Math.random()
    )}`;
  // if user has id it will update the info
  if (user.id) {
    return axios.put(`${apiUrl}/${user.id}`, user);
  }
  // Creates a user
  return axios.post(`${apiUrl}`, user);
};
// Method to register a new user
export const registerUser = async (user) => {
  const existingUser = (await axios.get(`${apiUrl}?email=${user.email}`)).data;

  if (existingUser.length > 0) {
    throw new Error("This email address is already in the use");
  }
  return addUser(user);
};

//Method for login
export const login = async (user) => {
  const allUsers = (await getAllUsers()).data;

  const foundUser = allUsers.find(
    (u) => u.email === user.email && u.password === user.password
  );

  if (!foundUser) throw new Error("Invalid username/password");

  localStorage.setItem("loggedUser", JSON.stringify(foundUser));

  return foundUser;
};
