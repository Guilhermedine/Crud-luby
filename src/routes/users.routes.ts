import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";


import { CreateUserController } from "../modules/accounts/useCases/createUser/CreateUserController"

const usersRoutes = Router();


const createUserController = new CreateUserController();

usersRoutes.post("/users", createUserController.handle);

export { usersRoutes };
