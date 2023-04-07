import { Router } from "express";
import { addBook } from "../controllers/booksControllers.js";

const route = Router();

route.post("/books", addBook);
// route.get("/books", listBooks);
// route.delete("books", destroyBooks);
// route.patch("/books", fixBooks);

export default route;
