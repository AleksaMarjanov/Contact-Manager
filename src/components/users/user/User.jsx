import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getUserById } from "../../../utils/http-utils/User-request";
import UserCard from "./../user-card/UserCard";
import { deleteUser } from "./../../../utils/http-utils/User-request";
import "./user.scss";
import { deleteTask, getAllTasksForAuthor, addTask, getAllTasks } from './../../../utils/http-utils/task-requests';
import TaskCard from "../../tasks/task-card/TaskCard";

const User = () => {
  const params = useParams();
  const [user, setUser] = useState(null);
  const [userTasks, setUserTasks] = useState([]);
  const [tasks, setTasks] = useState([]);

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

  useEffect(() => {
    getUserById(params.id).then((response) => setUser(response.data));
    getAllTasksForAuthor(params.id).then((response) => setUserTasks(response.data))
  }, [params.id]);

  const deleteTaskHandler = async (id) => {
    await deleteTask(id);
    setTasks((prevTask) => {
      return prevTask.filter((task) => task.id !== id);
    })
    window.location.reload();
  };
  const onChangeStatusHandler = (status, id) => {
    const task = tasks.find((task) => task.id === id);
    task.status = status;
    addTask(task).then(() => {
      setTasks([...tasks]);
    })
    window.location.reload();
  };

  return (
    <div className="user">
      <UserCard user={user} deleteUser={deleteUser} />
      <div className="user-tasks-holder" >
        {userTasks.map(task=> <TaskCard key={task.id} task={task} deleteTask={deleteTaskHandler} changeStatus={onChangeStatusHandler}/>
      )}
      </div>
    </div>
  );
};

export default User;
