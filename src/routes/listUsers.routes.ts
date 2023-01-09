import { Router } from "express";
const listUsersRoutes = Router();

import { ListUsersController } from "../modules/accounts/useCases/listUsers/ListUsersController"


const listUsersController = new ListUsersController()

listUsersRoutes.get("/accounts", listUsersController.handle)


export { listUsersRoutes }
