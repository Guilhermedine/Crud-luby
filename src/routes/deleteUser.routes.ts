import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { DeleteUserController } from "../modules/accounts/useCases/deleteAccount/DeleteUserController"

const deleteUserRoutes = Router();

const deleteUserController = new DeleteUserController()


deleteUserRoutes.delete("/deleteUser", ensureAuthenticated, deleteAccountController.handle)


export { deleteUserRoutes }