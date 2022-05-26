import axios from "axios";
import { getLoggedUser } from "./User-request";

export const TaskStatus = {
  NEW: "New",
  IN_PROGRESS: "In Progress",
  IN_REVIEW: "In Review",
  DONE: "Done",
};
const apiUrl = "http://localhost:3005/tasks";
// const apiUrl = "https://6277c8b22f94a1d7061233cb.mockapi.io/Crud";

export const getAllTasks = () => {
  return axios.get(apiUrl);
};

export const getAllTasksForAuthor = (authorId) => {
  return axios.get(`${apiUrl}?authorId=${authorId}`);
};

export const getTaskById = (taskId) => {
  return axios.get(`${apiUrl}/${taskId}`);
};

export const addTask = (task) => {
  if (!task.id) {
    const loggedUser = getLoggedUser();

    task.authorId = loggedUser.id;
    task.authorName = loggedUser.name;
    task.status = TaskStatus.NEW;
    task.createdDate = new Date().toDateString();
    task.dueDate = new Date(task.dueDate).toDateString();
    return axios.post(apiUrl, task);
  }

  task.createdDate = new Date(task.createdDate).toDateString();
  task.dueDate = new Date(task.dueDate).toDateString();
  return axios.put(`${apiUrl}/${task.id}`, task);
};

export const deleteTask = (id) => {
  return axios.delete(`${apiUrl}/${id}`);
};
