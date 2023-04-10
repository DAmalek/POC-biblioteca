import connection from "../config/database.js";
import { Books } from "../protocols/books.js";

async function insertBook({ titulo, autor, descricao }: Books) {
  await connection.query(
    `INSERT INTO livros (titulo, autor, descricao) VALUES ($1, $2, $3)`,
    [titulo, autor, descricao]
  );
}

async function findByTitle(titulo: string) {
  return await connection.query(`SELECT * FROM livros WHERE titulo=$1`, [
    titulo,
  ]);
}

async function listAll() {
  return await connection.query(`SELECT * FROM livros;`);
}

async function destroyBook(id: number | string) {
  await connection.query(`DELETE FROM livros WHERE id = $1;`, [id]);
}

export default { insertBook, findByTitle, listAll, destroyBook };
