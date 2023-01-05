import { Router } from "express";
import { ListUsersController } from "../modules/accounts/useCases/listUsers/ListUsersController"

const listUsersRoutes = Router();

const listUsersController = new ListUsersController()

listUsersRoutes.get("/accounts", listUsersController.handle)


export { listUsersRoutes }
