import { Router } from "express";
import { AddCarController } from "../modules/cars/useCases/AddCar/AddCarController";
import { ListAllCarsController } from "../modules/cars/useCases/ListAllCars/ListAllCarsController"

const carsRoutes = Router();

const addCarController = new AddCarController();

const listAllCarsController = new ListAllCarsController();

carsRoutes.post("/", addCarController.handle)

carsRoutes.get("/", listAllCarsController.handle)

export { carsRoutes }