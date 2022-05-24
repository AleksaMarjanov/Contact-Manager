import axios from "axios";
import { getLoggedUser } from "./User-request";

export const TaskStatus = {
  NEW: "New",
  IN_PROGRESS: "In Progress",
  IN_REVIEW: "In Review",
  DONE: "Done",
};
const apiUrl = "http://localhost:3005/tasks";

export const getAllTasks = () => {
  return axios.get(apiUrl);
};

export const getAllTasksForAuthor = (authorId) => {
  return axios.get(`${apiUrl}?authorId=${authorId}`);
};

export const addTask = (task) => {
  if (!task.id) {
    const loggedUser = getLoggedUser();

    task.authorId = loggedUser.id;
    task.authorName = loggedUser.name;
    task.createdDate = new Date().toString();
    return axios.put(apiUrl, task);
  }

  return axios.put(`${apiUrl}/${task.id}`, task);
};
