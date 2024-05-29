import { Router } from "express";
const router = Router();
//register route
router.get("/ask", (req, res) => {
  res.end("you can ask questions");
});

//login user
router.post("/post", (req, res) => {
  res.end("you can answer/post questions");
});

//check user
router.get("/checkQuesions", (req, res) => {
  res.end("you can check questions");
});

export default router;
