import { Router } from "express"
import { authenticateRoutes } from "./authenticate.routes";
import { listAccountsRoutes } from "./listAccounts.routes";
import { updateAccountRoutes } from "./updateAccount.routes";
import { locateUserRoutes } from "./locateUser.routes"

import { usersRoutes } from "./users.routes";


const router = Router();

router.use(usersRoutes);

router.use(locateUserRoutes)

router.use(authenticateRoutes)

router.use(listAccountsRoutes)

router.use(updateAccountRoutes)


export { router }