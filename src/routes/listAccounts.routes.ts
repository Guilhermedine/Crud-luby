import { Router } from "express";
import { ListAccountsController } from "../modules/accounts/useCases/listAccounts/ListAccountsController"

const listAccountsRoutes = Router();

const listAccountsController = new ListAccountsController()

listAccountsRoutes.get("/accounts", listAccountsController.handle)


export { listAccountsRoutes }
