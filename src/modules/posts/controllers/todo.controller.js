// IMPORT SERVICE
import * as TodoService from "../service/todo.service.js";

// ADD TASK CONTROLLER
const AddTask = async (req, res) => {
  try {
    console.log("🟢 req.body received:", req.body); 
    const { task, username } = req.body;
    if (!task) {
      console.log("❌ Task missing");
      return res.status(400).json({ message: "Task is required" });
    }
    const output = await TodoService.addTask(task, username);
    res.status(201).json({ message: "Task created successfully", output });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
}

// GET ALL TASK CONTROLLER
const GetAllTask = async (req, res) => {
  try {
    const username = decodeURIComponent(req.params.username);
    const tasks = await TodoService.getAllTask(username);
    res.status(201).json({ tasks });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

// MARK A TASK AS COMPLETE CONTROLLER
const CompleteTask = async (req, res) => {
  try {
    const id = req.params.id;
    const output = await TodoService.completeTask(id);
    res.status(201).json({ message: "Mark task as complete successfully", output });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

// DELETE A TASK CONTROLLER
const DeleteTask = async (req, res) => {
  try {
    const id = req.params.id;
    const output = await TodoService.deleteTask(id);
    res.status(201).json({ message: "Delete task successfully", output });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

// EXPORT CONTROLLERS
export { AddTask, GetAllTask, CompleteTask, DeleteTask };
