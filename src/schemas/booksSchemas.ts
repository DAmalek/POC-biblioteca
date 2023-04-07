import joi from "joi";

export const booksSchema = joi.object({
  titulo: joi.string().required(),
  autor: joi.string().required(),
  descricao: joi.string().required(),
});
