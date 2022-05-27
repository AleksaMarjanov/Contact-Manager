import React, { useEffect, useState } from "react";
import "./taskslist.scss";
import {
  getAllTasks,
  deleteTask,
  getAllTasksForAuthor,
  addTask,
} from "../../../utils/http-utils/task-requests";
import TaskCard from "../task-card/TaskCard";
import { useParams } from "react-router";

const TasksList = () => {
  const [tasks, setTasks] = useState([]);
  const params = useParams();

  useEffect(() => {
    if (params.id) {
      getAllTasksForAuthor(params.id).then((response) => {
        setTasks(response.data);
      });
    } else {
      getAllTasks().then((response) => {
        setTasks(response.data);
      });
    }
  }, [params.id]);

  const deleteTaskHandler = async (id) => {
    await deleteTask(id);
    setTasks((prevTask) => {
      return prevTask.filter((task) => task.id !== id);
    });
  };

  const onChangeStatusHandler = (status, id) => {
    const task = tasks.find((task) => task.id === id);
    task.status = status;
    addTask(task).then(() => {
      setTasks([...tasks]);
    });
  };

  return (
    <>
      <div className="tasks-list-wrapper">
        {tasks.map((task) => (
          <TaskCard
            changeStatus={onChangeStatusHandler}
            key={task.id}
            task={task}
            deleteTask={deleteTaskHandler}
          />
        ))}
      </div>
    </>
  );
};

export default TasksList;
