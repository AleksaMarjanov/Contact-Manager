import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getUserById } from "../../../utils/http-utils/User-request";
import UserCard from "./../user-card/UserCard";

const User = (props) => {
  const params = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUserById(params.id).then((response) => setUser(response.data));
  }, [params.id]);

  return (
    <div className="user">
      <UserCard user={user} />
    </div>
  );
};

export default User;
