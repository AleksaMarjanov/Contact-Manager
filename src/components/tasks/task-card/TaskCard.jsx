import React from "react";
import "./taskcard.scss";
import InfoIcon from "@mui/icons-material/Info";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Header from "./../../header/Header";
import Footer from "./../../footer/Footer";

const TaskCard = ({ task }) => {
  return (
    <>
      <Header />
      <div className="task-card-wrapper">
        {" "}
        <Card className="card" sx={{ maxWidth: 345 }}>
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              {task.title}
            </Typography>
            <Typography>
              <span className="key">Author:</span>
              <span className="value"> {task.authorName}</span>
            </Typography>
            <Typography>
              <span className="key">Status:</span>
              <span className="value"> {task.status}</span>
            </Typography>
            <Typography>
              <span className="key">Created:</span>
              <span className="value"> {task.createdDate}</span>
            </Typography>
            <Typography>
              <span className="key">Due:</span>
              <span className="value"> {task.dueDate}</span>
            </Typography>
          </CardContent>
          <CardActions>
            <div className="btn-holder">
              <EditIcon color="success" className="edit" />
              <DeleteIcon color="error" className="delete" />
              <InfoIcon color="primary" className="info" />
            </div>
          </CardActions>
        </Card>
      </div>
      <Footer />
    </>
  );
};

export default TaskCard;
