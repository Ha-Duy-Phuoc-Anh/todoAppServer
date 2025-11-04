// IMPORT SERVICE
import * as AuthService from "../services/auth.service.js";

// SIGNUP CONTROLLER
const SignUp = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await AuthService.registerUser(username, password);
    res.status(201).json({ message: "User registered successfully", user });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// SIGNIN CONTROLLER
const SignIn = async (req, res) => {
  try {
    const { username, password } = req.body;
    await AuthService.loginUser(username, password);
    res.status(201).json({ message: "User login successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// EXPORT CONTROLLERS
export { SignUp, SignIn };
