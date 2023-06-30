import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import thunk from "redux-thunk";
import userRouter from "./routes/users.js";
// import questionRouter from "./routes/Question.js";
// import answerRoutes from "./routes/Answers.js";

const app = express();
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const PORT = process.env.PORT || 4000;

app.use("/users", userRouter);
// app.use("/questions", questionRouter);
// app.use("/answer", answerRoutes);

const CONNECTION_URL = 
"mongodb+srv://mongodbUser:mongodb2122@our-stack-overflow-clon.hztppmh.mongodb.net/?retryWrites=true&w=majority"
// "mongodb://localhost:27017";

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  )
  .catch((err) => console.log(err));
