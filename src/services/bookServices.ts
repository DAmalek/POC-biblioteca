import { string } from "joi";
import { addBook } from "../controllers/booksControllers.js";
import errors from "../errors/index.js";
import { Books } from "../protocols/books.js";
import booksRepositories from "../repositories/booksRepositories.js";

async function create({ titulo, autor, descricao }: Books) {
  const livroExiste = await booksRepositories.findByTitle(titulo);

  if (livroExiste) throw errors.conflictError("livro ja existe");

  await booksRepositories.insertBook({ titulo, autor, descricao });
}

async function list() {
  const { rows, rowCount } = await booksRepositories.listAll();

  if (!rowCount) throw errors.notFoundError();

  return rows;
}

export default { create, list };
