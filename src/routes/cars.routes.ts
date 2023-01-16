import { Router } from "express";
import { AddCarController } from "../modules/cars/useCases/addCar/AddCarController";

const carsRoutes = Router();

const addCarController = new AddCarController();

carsRoutes.post("/", addCarController.handle)

export { carsRoutes }