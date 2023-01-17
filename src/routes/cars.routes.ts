import { Router } from "express";
import { LocateCarController } from "../modules/cars/useCases/locateCar/LocateCarController";
import { AddCarController } from "../modules/cars/useCases/addCar/AddCarController";
import { ListAllCarsController } from "../modules/cars/useCases/listAllCars/ListAllCarsController"

const carsRoutes = Router();

const addCarController = new AddCarController();

const listAllCarsController = new ListAllCarsController();

const locateCarController = new LocateCarController();

carsRoutes.post("/", addCarController.handle)

carsRoutes.get("/", listAllCarsController.handle)

carsRoutes.get("/:id", locateCarController.handle)

export { carsRoutes }