import { Router } from "express";
import uploadConfig from "../config/upload"
import multer from "multer"
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";


import { CreateUserController } from "../modules/accounts/useCases/CreateUser/CreateUserController"
import { UserAvatarController } from "../modules/accounts/useCases/userAvatar/UserAvatarController";

const usersRoutes = Router();

const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"))

const createUserController = new CreateUserController();

const userAvatarController = new UserAvatarController();

usersRoutes.patch("/avatar", uploadAvatar.single("avatar"), ensureAuthenticated, userAvatarController.handle)

usersRoutes.post("/", createUserController.handle);

export { usersRoutes };
