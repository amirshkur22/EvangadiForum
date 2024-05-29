import { Router } from "express";
const router = Router();
router.get("/all-questions",(req, res) => {
  res.end("you can ask questions");
});

//login user
router.post("/post-questions", (req, res) => {
  res.end("you can answer/post questions");
});

//check user
router.get("/check-questions", (req, res) => {
  res.end("you can check questions");
});

export default router;
