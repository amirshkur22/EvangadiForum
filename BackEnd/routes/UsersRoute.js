import { Router } from "express";
import { register, login, checkUser } from "../controller/userController.js";
const router = Router();
//register route
router.post("/register", register);

//login user
router.post("/login", login);

//check user
router.get("/check", checkUser);

export default router;
