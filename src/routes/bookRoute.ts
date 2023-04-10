import { Router } from "express";
import { addBook, listBooks } from "../controllers/booksControllers.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { booksSchema } from "../schemas/booksSchemas.js";

const route = Router();

route.post("/books", validateSchema(booksSchema), addBook);
route.get("/books", listBooks);
// route.delete("books", destroyBooks);
// route.patch("/books", fixBooks);

export default route;
