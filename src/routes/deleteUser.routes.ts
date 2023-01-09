import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
const deleteUserRoutes = Router();

import { DeleteUserController } from "../modules/accounts/useCases/deleteUser/DeleteUserController"


const deleteUserController = new DeleteUserController()


deleteUserRoutes.delete("/deleteUser", ensureAuthenticated, deleteUserController.handle)


export { deleteUserRoutes }