import { Router } from "express";
import { body, validationResult } from 'express-validator'

import { CreateUserController } from "../modules/accounts/useCases/CreateUser/CreateUserController"

const usersRouter = Router();

const createUserController = new CreateUserController();


usersRouter.post("/",
  body('email').isEmail()
  , createUserController.handle);

export { usersRouter };
