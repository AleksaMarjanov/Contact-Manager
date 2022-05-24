import React, { useEffect, useState } from "react";
import "./taskslist.scss";
import {
  getAllTasks,
  deleteTask,
} from "../../../utils/http-utils/task-requests";
import TaskCard from "../task-card/TaskCard";
import Header from "./../../header/Header";

const TasksList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getAllTasks().then((response) => {
      setTasks(response.data);
    });
  }, []);

  const deleteTaskHandler = async (id) => {
    await deleteTask(id);
    setTasks((prevTask) => {
      return prevTask.filter((task) => task.id !== id);
    });
  };

  return (
    <>
      <Header />
      <div className="tasks-list-wrapper">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} deleteTask={deleteTaskHandler} />
        ))}
      </div>
    </>
  );
};

export default TasksList;
