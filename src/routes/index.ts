import { Router } from "express"
import { authenticateRoutes } from "./authenticate.routes";
import { listUsersRoutes } from "./listUsers.routes";
import { updateUserRoutes } from "./updateUser.routes";
import { locateUserRoutes } from "./locateUser.routes"

import { usersRoutes } from "./users.routes";
import { deleteUserRoutes } from "./deleteUser.routes";


const router = Router();

router.use(deleteUserRoutes);

router.use("/users", usersRoutes);

router.use(locateUserRoutes);

router.use(authenticateRoutes);

router.use(listUsersRoutes);

router.use(updateUserRoutes);


export { router }