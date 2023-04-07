import { addBook } from "../controllers/booksControllers.js";
import { Books } from "../protocols/books.js";
import booksRepositories from "../repositories/booksRepositories.js";

async function create({ titulo, autor, descricao }: Books) {
  const { rowsCount } = await booksRepositories.findByTitle(titulo);
}

export default { create };
