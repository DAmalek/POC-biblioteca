import { Response, Request } from "express";
import { Books } from "../protocols/books.js";

export async function addBook(req: Request, res: Response) {
  const { titulo, autor, descricao } = req.body as Books;

  try {
  } catch (error) {}
}
