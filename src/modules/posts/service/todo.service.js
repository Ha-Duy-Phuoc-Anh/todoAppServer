// IMPORT REPO
import * as TodoRepo from "../repositories/todo.repository.js";

// ADD TASK SERVICE
const addTask = async (task, username) => {
  const output = await TodoRepo.addTask(task, username);
  if (!output) throw new Error("There is an error while add task");
  return output;
};

// GET ALL TASK SERVICE
const getAllTask = async (username) => {
  const output = await TodoRepo.getAllTask(username);
  if (!output) throw new Error("You have no task");
  return output;
};

// COMPLETE TASK SERVICE
const completeTask = async (taskId) => {
  const output = await TodoRepo.completeTask(taskId);
  if (!output) throw new Error("There is an error while mark a task as complete");
  return output;
};

// DELETE TASK SERVICE
const deleteTask = async (taskId) => {
  const output = await TodoRepo.deleteTask(taskId);
  if (!output) throw new Error("There is an error while delete a task");
  return output;
};

// EXPORT SERVICES
export { addTask, getAllTask, completeTask, deleteTask };
