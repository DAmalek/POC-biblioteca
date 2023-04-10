import err from "../errors/index.js";

import { Response, Request } from "express";
import { Books } from "../protocols/books.js";

export function validateSchema(schema) {
  return (req: Request, res: Response, next) => {
    const { error } = schema.validate(req.body, { abortEarly: false });
    if (error) {
      const errors = error.details.map((detail) => detail.message);
      throw err.conflictError(errors);
    }

    next();
  };
}
