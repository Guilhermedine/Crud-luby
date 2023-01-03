import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";


import { CreateUserController } from "../modules/accounts/useCases/CreateUser/CreateUserController"

const usersRoutes = Router();


const createUserController = new CreateUserController();

usersRoutes.post("/", createUserController.handle);

export { usersRoutes };
