import express from "express";
import router from "./routes/authRoute";
import dotenv from "dotenv";
import bodyParser from "body-parser";

dotenv.config();

const app = express();

const PORT = 3000;

app.use(bodyParser.json());

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
