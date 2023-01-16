import "reflect-metadata";
import express, { NextFunction, Request, Response } from 'express';
import "express-async-errors"
import { router } from './routes';
import "./shared/container"
import { AppError } from "./errors/AppError";


const app = express();
const PORT = 3000;

app.use(express.json())

app.use(router)

/*app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      message: err.message
    })
  }
  return res.status(500).json({
    status: "error",
    message: `Internal server error - ${err.message}`,
  })
})*/



app.listen(PORT, () => console.log(`Server is listening on http://localhost:${PORT}`))