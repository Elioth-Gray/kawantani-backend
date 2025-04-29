import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import userRouter from "./routes/usersRoute";
import authRoute from "./routes/authRoute";

dotenv.config();

const app = express();

const PORT = 3000;

app.use(bodyParser.json());

app.use("/api", authRoute);
app.use("/api", userRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
