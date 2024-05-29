import express from "express";
import cors from "cors";
import usersRoutes from "./routes/usersRoutes.js";
import questionsRoutes from "./routes/QuestionsRoutes.js";
import answersRoutes from "./routes/AnswersRoutes.js";
import pool from "./db/DbConfig.js";
const app = express();
const portNo = process.env.VITE_PORT_NO;
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
const corsOption = {
  origin: ["http://localhost:2024", "https//www.evangad.com"],
};
app.use(cors(corsOption));

//user routes middleware
app.use("/api/users", usersRoutes);
//quesions routes middleware
app.use("/api/questions", questionsRoutes);
//answers routes middleware
app.use("/api/answers", answersRoutes);
const start = async () => {
  try {
    const result = await pool.execute('select "test" ');
    app.listen(portNo);
    console.log("db connection estabilished!!");
    console.log(`server running and listening on http:///localhost:${portNo}`);
  } catch (error) {
    console.log(error.message);
  }
};
start();
