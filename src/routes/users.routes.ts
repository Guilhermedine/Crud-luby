import { Router } from "express";
import uploadConfig from "../config/upload"
import multer from "multer"


import { CreateUserController } from "../modules/accounts/useCases/CreateUser/CreateUserController"

const usersRouter = Router();

const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"))

const createUserController = new CreateUserController();


usersRouter.post("/", createUserController.handle);

export { usersRouter };
