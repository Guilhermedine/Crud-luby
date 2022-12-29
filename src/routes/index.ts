import { Router } from "express"
import { authenticateRoutes } from "./authenticate.routes";
import { listAccountsRoutes } from "./listAccounts.routes";

import { usersRouter } from "./users.routes";


const router = Router();

router.use("/users", usersRouter);

router.use(authenticateRoutes)

router.use(listAccountsRoutes)


export { router }