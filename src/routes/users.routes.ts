import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { UpdateUserController } from "../modules/accounts/useCases/updateUser/UpdateUserController";
import { CreateUserController } from "../modules/accounts/useCases/createUser/CreateUserController"
import { LocateUserController } from "../modules/accounts/useCases/locateUser/LocateUserController";
import { ListUsersController } from "../modules/accounts/useCases/listUsers/ListUsersController"
import { DeleteUserController } from "../modules/accounts/useCases/deleteUser/DeleteUserController"

const usersRoutes = Router();

const createUserController = new CreateUserController();

const updateUserController = new UpdateUserController();

const locateUserController = new LocateUserController();

const listUsersController = new ListUsersController();

const deleteUserController = new DeleteUserController();

usersRoutes.post("/", createUserController.handle);

usersRoutes.get("/", listUsersController.handle);

usersRoutes.put("/:id", ensureAuthenticated, updateUserController.handle);

usersRoutes.get("/:id", locateUserController.handle);


usersRoutes.delete("/", ensureAuthenticated, deleteUserController.handle)

export { usersRoutes };
