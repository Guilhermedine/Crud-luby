import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { DeleteAccountController } from "../modules/accounts/useCases/deleteAccount/DeleteAccountController"

const deleteAccountRoutes = Router();

const deleteAccountController = new DeleteAccountController()


deleteAccountRoutes.delete("/deleteAccount", ensureAuthenticated, deleteAccountController.handle)


export { deleteAccountRoutes }