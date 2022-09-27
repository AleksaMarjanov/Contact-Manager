import "./userslist.scss";
import React, { useState, useEffect } from "react";
import UserCard from "../user-card/UserCard";
import {
  deleteUser,
  getAllUsers,
  getLoggedUser
} from "../../../utils/http-utils/User-request";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const loggedUser = getLoggedUser()


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
      }
    
  

export default UsersList;
