import { Router } from "express";
import { LocateUserController } from "../modules/accounts/useCases/locateUser/LocateUserController";


const locateUserRoutes = Router();

const locateUserController = new LocateUserController()

locateUserRoutes.get("/account", locateUserController.handle)


export { locateUserRoutes }