import express from "express";
import * as dotenv from "dotenv";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import "./lib/db";
dotenv.config();
const app = express();
const PORT = 5000 || process.env.PORT;

app.use(cors({ origin: "http://localhost:3000" }));
app.use(helmet());
app.use(morgan("common"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, () => {
  console.log(`port is connected : ${PORT}`);
});
