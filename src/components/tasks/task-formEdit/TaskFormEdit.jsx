import React, { useState, useEffect } from "react";
import {
  Button,
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import {
  addTask,
  getTaskById,
  TaskStatus,
} from "../../../utils/http-utils/task-requests";
import { useNavigate } from "react-router";
import { useParams } from "react-router";
import "./taskformedit.scss";

const TaskFormEdit = () => {
  const [task, setTask] = useState({
    id: "",
    title: "",
    description: "",
    dueDate: "",
    status: "",
  });
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    // if task has an id
    if (params.id) {
      getTaskById(params.id).then((response) => {
        setTask(response.data);
      });
    }
  }, [params.id]);

  const onInputChange = (e) => {
    let { name, value } = e.target;

    setTask((prevTask) => {
      return {
        ...prevTask,
        [name]: value,
      };
    });
  };

  const onTaskSubmit = (e) => {
    e.preventDefault();

    addTask(task).then(() => {
      navigate(`/tasks-list`);
    });
  };

  return (
    <div className="task-form-wrapper">
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 2, width: "25ch" },
        }}
        autoComplete="off"
        onSubmit={onTaskSubmit}
      >
        <TextField
          name="title"
          value={task.title}
          id="outlined-required"
          label="Title"
          placeholder="Enter title"
          onChange={onInputChange}
          required={true}
        />
        <TextField
          name="description"
          value={task.description}
          id="outlined-required"
          label="Description"
          placeholder="Enter description"
          onChange={onInputChange}
          required={true}
        />
        <TextField
          name="dueDate"
          value={task.dueDate}
          id="outlined-required"
          //   type="date" // looks wierd
          label="Due Date"
          placeholder="Enter Due date"
          onChange={onInputChange}
          required={true}
        />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Status</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={task.status}
            label="status"
            name="status"
            placeholder="Select Status"
            onChange={onInputChange}
          >
            {Object.keys(TaskStatus).map((status) => (
              <MenuItem key={status} value={TaskStatus[status]}>
                {" "}
                {TaskStatus[status]}{" "}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button className="button" type="submit" color="primary">
          {task.id ? "Edit Task" : "Create Task"}
        </Button>
      </Box>
    </div>
  );
};

export default TaskFormEdit;
