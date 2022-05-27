import React from "react";
import "./taskcard.scss";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Footer from "./../../footer/Footer";
import { getLoggedUser } from "./../../../utils/http-utils/User-request";
import { useNavigate } from "react-router-dom";
import { TaskStatus } from "../../../utils/http-utils/task-requests";
import { Button } from "@mui/material";

const TaskCard = ({ task, deleteTask, changeStatus }) => {
  const loggedUser = getLoggedUser();
  const navigate = useNavigate();

  const navigateToEdit = () => {
    navigate(`/task/edit/${task.id}`);
  };

  const getNextStateButton = () => {
    switch (task.status) {
      case TaskStatus.NEW:
        return (
          <Button
            color="warning"
            onClick={() => changeStatus(TaskStatus.IN_PROGRESS, task.id)}
          >
            Move to in Progress
          </Button>
        );
      case TaskStatus.IN_PROGRESS:
        return (
          <Button
            color="error"
            onClick={() => changeStatus(TaskStatus.IN_REVIEW, task.id)}
          >
            Move to in Review
          </Button>
        );
      case TaskStatus.IN_REVIEW:
        return (
          <Button
            color="success"
            onClick={() => changeStatus(TaskStatus.DONE, task.id)}
          >
            Move to Done
          </Button>
        );
      default:
        <Button color="success">Status</Button>;
    }
  };

  return (
    <>
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
              {loggedUser && loggedUser.id === task.authorId && (
                <EditIcon
                  color="success"
                  className="edit"
                  onClick={navigateToEdit}
                />
              )}
              {loggedUser && loggedUser.id === task.authorId && (
                <DeleteIcon
                  color="error"
                  className="edit"
                  onClick={() => deleteTask(task.id)}
                />
              )}
              {getNextStateButton()}
            </div>
          </CardActions>
        </Card>
      </div>
      <Footer />
    </>
  );
};

export default TaskCard;
