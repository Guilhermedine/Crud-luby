import { Router } from "express"
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { UpdateUserController } from "../modules/accounts/useCases/updateUser/UpdateUserController";

const updateUserRoutes = Router();

const updateUserController = new UpdateUserController();

updateUserRoutes.put("/updateAccount", ensureAuthenticated, updateUserController.handle)


export { updateUserRoutes }