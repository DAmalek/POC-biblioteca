import express, { Router } from "express";
import dotenv from "dotenv";
import route from "./routes/bookRoute.js";

dotenv.config();

const server = express();

server.use(express.json());
server.use(cors());
server.use([route]);

server.listen(process.env.PORT, () => {
  console.log("server bombando!!!");
});
