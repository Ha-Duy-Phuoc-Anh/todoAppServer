// IMPORT DATABASE
import db from "../../../shared/config/db.js";

// ADD TODO
const addTask = async (task, username) => {
  const query = `
    INSERT INTO todos (user_name, task, complete)
    VALUES ($1, $2, FALSE)
    RETURNING id, user_name, task, created_at;
  `;
  const result = await db.query(query, [username, task]);
  return result.rows[0];
};

// GET ALL TODO
const getAllTask = async (username) => {
  const query = `SELECT * FROM todos WHERE user_name = $1;`;
  const result = await db.query(query, [username]);
  return result.rows;
};

// MARK A TASK AS COMPLETE
const completeTask = async (taskId) => {
  const query = `UPDATE todos SET complete = TRUE WHERE id = $1 RETURNING *`;
  const result = await db.query(query, [taskId]);
  return result.rows[0];
}

// DELETE A TASK
const deleteTask = async (taskId) => {
  const query = `DELETE FROM todos WHERE id = $1 RETURNING *`;
  const result = await db.query(query, [taskId]);
  return result.rows[0];
}

// EXPORT REPO
export { addTask, getAllTask, completeTask, deleteTask };
