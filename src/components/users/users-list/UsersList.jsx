import "./userslist.scss";
import React, { useState, useEffect } from "react";
import UserCard from "../user-card/UserCard";
import {
  deleteUser,
  getAllUsers,
} from "../../../utils/http-utils/User-request";
// import  uuid  from "uuidv4";

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers().then((response) => {
      setUsers(response.data);
      // console.log(response.data);
    });
  }, []);

  const deleteUserHandler = async (id) => {
    await deleteUser(id);
    setUsers((prevUsers) => {
      return prevUsers.filter((user) => user.id !== id);
    });
  };

  return (
    <div className="users-list-wrapper">
      {users.map((user, index) => (
        <UserCard key={index} user={user} deleteUser={deleteUserHandler} />
      ))}
    </div>
  );
};

export default UsersList;
