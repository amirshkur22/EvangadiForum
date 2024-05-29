import express from "express";
import cors from "cors";
import usersRoutes from "./routes/UsersRoute.js";
import questionsRoutes from "./routes/QuestionsRoute.js";
import answersRoutes from "./routes/AnswersRoute.js";
import tableRoutes from './routes/TablesRoute.js';
import dbCon from "./db/DbConfig.js";

const app = express();
const portNo = process.env.VITE_PORT_NO || 2024;  // Ensure port number is set

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

const corsOption = {
  origin: ["http://localhost:2024", "https://www.evangad.com"],
};
app.use(cors(corsOption));

// User routes middleware
app.use("/api/users", usersRoutes);
// Questions routes middleware
app.use("/api/questions", questionsRoutes);
// Answers routes middleware
app.use("/api/answers", answersRoutes);
// Table creation routes middleware
app.use("/api/tables", tableRoutes);

const start = async () => {
  try {
    await dbCon.execute('select "test"');
    app.listen(portNo, () => {
      console.log(`Server running and listening on http://localhost:${portNo}`);
    });
  } catch (error) {
    console.log(error.message);
  }
};

start();
