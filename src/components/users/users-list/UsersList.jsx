import "./userslist.scss";
import React, { useState, useEffect } from "react";
import UserCard from "../user-card/UserCard";
import getAllUsers from "./../../../utils/http-utils/User-request";

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers().then((response) => {
      setUsers(response.data);
      // console.log(response.data);
    });
  }, []);

  return (
    <div className="users-list-wrapper">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UsersList;
