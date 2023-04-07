import express, { Router } from "express";
import dotenv from "dotenv";
import route from "./routes/bookRoute.js";
import cors from "cors";

dotenv.config();

const server = express();

server.use(express.json());
server.use(cors());

server.get("/health", (req, res) => {
  res.send("ok ;(");
});
server.use([route]);

server.listen(process.env.PORT, () => {
  console.log("server bombando!!!!!");
});
