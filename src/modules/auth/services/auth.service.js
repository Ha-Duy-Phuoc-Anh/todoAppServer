// IMPORT LIBRARIES
import bcrypt from "bcrypt";
import * as AuthRepo from "../repositories/auth.repository.js";

// REGISTER USER SERVICE
const registerUser = async (username, password) => {
  const isExist = await AuthRepo.findByUserName(username);
  if (isExist) throw new Error("Username already taken");

  const hashedPassword = await bcrypt.hash(password, 10);
  return await AuthRepo.createUser(username, hashedPassword);
};

// LOGIN USER SERVICE
const loginUser = async (username, password) => {
  const user = await AuthRepo.findByUserName(username);
  if (!user) throw new Error("User is not found");

  const isValid = await bcrypt.compare(password, user.hashed_password);
  if (!isValid) throw new Error("Invalid password");
};

// EXPORT SERVICES
export { registerUser, loginUser };
