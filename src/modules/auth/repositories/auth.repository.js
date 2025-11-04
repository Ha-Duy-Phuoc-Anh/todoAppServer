// IMPORT DATABASE
import db from "../../../shared/config/db.js";

// CREATE NEW USER
const createUser = async (username, hashedPassword) => {
  const query = `
    INSERT INTO users (user_name, hashed_password)
    VALUES ($1, $2)
    RETURNING id, user_name, created_at;
  `;
  const result = await db.query(query, [username, hashedPassword]);
  return result.rows[0];
};

// FIND EXIST BY USERNAME
const findByUserName = async (username) => {
  const query = "SELECT * FROM users WHERE user_name = $1;";
  const result = await db.query(query, [username]);
  return result.rows[0];
};

// EXPORT REPOSITORIES
export { findByUserName, createUser };
