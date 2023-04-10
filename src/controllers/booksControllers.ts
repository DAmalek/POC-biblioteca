import { Response, Request } from "express";
import { Books } from "../protocols/books.js";
import bookServices from "../services/bookServices.js";

export async function addBook(req: Request, res: Response) {
  const { titulo, autor, descricao } = req.body as Books;

  try {
    await bookServices.create({ titulo, autor, descricao });

    return res.status(201).send({ titulo, autor, descricao });
  } catch (error) {
    console.log(error);
  }
}

export async function listBooks(req: Request, res: Response) {
  try {
    const livros = await bookServices.list();

    return res.status(200).send(livros);
  } catch (error) {
    console.log(error);
  }
}
