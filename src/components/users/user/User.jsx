import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getUserById } from "../../../utils/http-utils/User-request";
import UserCard from "./../user-card/UserCard";
import { deleteUser } from "./../../../utils/http-utils/User-request";

const User = () => {
  const params = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUserById(params.id).then((response) => setUser(response.data));
  }, [params.id]);

  return (
    <div className="user">
      <UserCard user={user} deleteUser={deleteUser} />
    </div>
  );
};

export default User;
