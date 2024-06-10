import { Router } from "express";
import  { postAnswer, getQuestionDetailsAndAnswers,  } from "../controller/answerController.js";

const router = Router();
router.post('/answer', postAnswer);
// New route for getting question details
router.get("/question'sAnswer/:question_id", getQuestionDetailsAndAnswers);


export default router;
