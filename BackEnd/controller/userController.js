import dbCon from "../db/DbConfig.js";
import bcrypt from "bcrypt";
import { StatusCodes } from "http-status-codes";
const register = async (req, res) => {
  const { userName, firstName, lastName, email, password } = req.body;
  if (!userName || !firstName || !lastName || !email || !password) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: "please provide all required information" });
  }
  try {
    const [user] = await dbCon.query(
      `SELECT user_id,user_name FROM users WHERE user_name=? OR email=?`,
      [userName, email]
    );
    // console.log(user);
    if (user.length > 0) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "user already exist!!" });
    }
    if (password.length < 8) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "password  must be at least 8 charcters" });
    }
    //password encription
    const salt = await bcrypt.genSalt(10);
    // console.log(salt)
    const hashedPassword = await bcrypt.hash(password, salt);
    // console.log(hashedPassword)
    await dbCon.query(
      `INSERT INTO users(user_name,first_name,last_name,email,password )VALUES(?,?,?,?,?)`,
      [userName, firstName, lastName, email, hashedPassword]
    );
    return res
      .status(StatusCodes.CREATED)
      .json({ message: "user registered sucessfully" });
  } catch (error) {
    console.log(error.message);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: `${error.message}` });
  }
};
const login = async (req, res) => {
  res.end("user loged in");
};
const checkUser = async (req, res) => {
  res.end("user checked");
};
export { register, login, checkUser };
