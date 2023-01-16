import { Router } from "express";
import { carsRoutes } from "./cars.routes"
import { authenticateRoutes } from "./authenticate.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use("/cars", carsRoutes)
router.use("/users", usersRoutes);
router.use("/sessions", authenticateRoutes);

export { router }