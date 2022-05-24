import React, { useEffect, useState } from "react";
import "./taskslist.scss";
import { getAllTasks } from "../../../utils/http-utils/task-requests";
import TaskCard from "../task-card/TaskCard";

const TasksList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getAllTasks().then((response) => {
      setTasks(response.data);
    });
  }, []);

  return (
    <div className="tasks-list-wrapper">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TasksList;
