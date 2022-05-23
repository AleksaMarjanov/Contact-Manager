import "./usercard.scss";
import React from "react";
import { useNavigate } from "react-router";
import InfoIcon from "@mui/icons-material/Info";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const UserCard = ({ user, deleteUser }) => {
  const navigate = useNavigate();

  const redirectToDetails = () => {
    navigate(`/user/${user.id}`);
  };

  const redirectToEdit = () => {
    navigate(`/user/edit/${user.id}`);
  };

  if (!user) {
    return <h1 className="p-lead">No user!</h1>;
  }

  return (
    <div className="user-card-wrapper">
      <Card className="card">
        <CardMedia
          component="img"
          alt="User"
          height="140"
          image={user.picture}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            {user.name}
          </Typography>
          <Typography>
            <span className="key">Address:</span>
            <span className="key"> {user.address}</span>
          </Typography>
          <Typography>
            <span className="key">E-mail:</span>
            <span className="key"> {user.email}</span>
          </Typography>
          <Typography>
            <span className="key">Phone:</span>
            <span className="key"> {user.phone}</span>
          </Typography>
        </CardContent>
        <CardActions>
          <div className="btn-holder">
            <EditIcon
              color="success"
              onClick={redirectToEdit}
              className="edit"
            />
            <DeleteIcon
              color="error"
              onClick={() => deleteUser(user.id)}
              className="delete"
            />
            <InfoIcon
              color="primary"
              onClick={redirectToDetails}
              className="info"
            />
          </div>
        </CardActions>
      </Card>
    </div>
    // <Card style={{ width: "18rem" }}>
    //   <Card.Img variant="top" src={user.picture} />
    //   <Card.Body>
    //     <Card.Title>{user.name}</Card.Title>
    //     <Card.Text>
    //       <span className="key">Address:</span>
    //       <span className="value">{user.address}</span>
    //     </Card.Text>
    //     <Card.Text>
    //       <span className="key">Email:</span>
    //       <span className="value">{user.email}</span>
    //     </Card.Text>
    //     <Card.Text>
    //       <span className="key">Phone:</span>
    //       <span className="value">{user.phone}</span>
    //     </Card.Text>
    //     <div className="btn-holder">
    //       <EditIcon color="success" onClick={redirectToEdit} className="edit" />
    //       <DeleteIcon
    //         color="error"
    //         onClick={() => deleteUser(user.id)}
    //         className="delete"
    //       />
    //       <InfoIcon
    //         color="primary"
    //         onClick={redirectToDetails}
    //         className="info"
    //       />
    //     </div>
    //   </Card.Body>
    // </Card>
  );
};

export default UserCard;
