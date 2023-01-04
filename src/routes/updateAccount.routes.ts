import { Router } from "express"
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { UpdateAccountController } from "../modules/accounts/useCases/updateAccount/UpdateAccountController";

const updateAccountRoutes = Router();

const updateAccountController = new UpdateAccountController();

updateAccountRoutes.put("/updateAccount", ensureAuthenticated, updateAccountController.handle)


export { updateAccountRoutes }