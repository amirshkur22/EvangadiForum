import mysql2 from "mysql2";
import dotenv from "dotenv";
dotenv.config();
const pool = mysql2.createPool({
  host: process.env.VITE_DB_HOST,
  user: process.env.VITE_DB_USER,
  password: process.env.VITE_DB_PASSWORD,
  database: process.env.VITE_DB,
  connectionLimit: 10,
});
// pool.getConnection((err, connection) => {
//   if (err) {
//     console.error("error connecting:", err);
//   } else {
//     console.log("Connected to Evangadi Database Sucessfully");
//     //   console.log(connection)
//     connection.release();
//   }
// });
// app.get("/createTable", (req, res) => {
//   let users = `CREATE TABLE IF NOT EXISTS users (
//     user_id INT(20) AUTO_INCREMENT PRIMARY KEY,
//     user_name VARCHAR(255) NOT NULL UNIQUE,
//     first_name VARCHAR(255) NOT NULL,
//     last_name VARCHAR(255) NOT NULL,
//     email VARCHAR(40) NOT NULL UNIQUE,
//     password VARCHAR(100) NOT NULL
// )`;
//   let questions = `CREATE TABLE IF NOT EXISTS questions (
//     id INT(20) NOT NULL AUTO_INCREMENT,
//         question_id VARCHAR(100) NOT NULL UNIQUE,
//         user_id INT(20) NOT NULL,
//         title VARCHAR(50) NOT NULL,
//         created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//         description TEXT NOT NULL,
//         tag VARCHAR(20),
//         PRIMARY KEY(id,question_id),
//         FOREIGN KEY (user_id) REFERENCES users(user_id)
//     )`;
//   let answers = `CREATE TABLE IF NOT EXISTS answers (
//     answer_id INT AUTO_INCREMENT PRIMARY KEY,
//     user_id INT(20) NOT NULL,
//     question_id VARCHAR(100) NOT NULL,
//     answer_text TEXT NOT NULL,
//     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//     FOREIGN KEY (question_id) REFERENCES questions(question_id),
//     FOREIGN KEY (user_id) REFERENCES users(user_id)
// )`;
//   pool.query(users, (err, rows, coloumns) => {
//     if (err) console.log(`error found ${err}`);
//   });
//   pool.query(questions, (err, rows, coloumns) => {
//     if (err) console.log(`error found ${err}`);
//     console.log(rows);
//   });
//   pool.query(answers, (err, rows, coloumns) => {
//     if (err) console.log(`error found ${err}`);
//   });
//   res.end("Tables Created SucessFully!!");
//   console.log("Tables Created SucessFully!!");
// });
export default pool.promise();
