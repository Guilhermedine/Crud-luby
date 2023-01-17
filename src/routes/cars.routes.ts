import { Router } from "express";
import { LocateCarController } from "../modules/cars/useCases/locateCar/LocateCarController";
import { AddCarController } from "../modules/cars/useCases/addCar/AddCarController";
import { ListAllCarsController } from "../modules/cars/useCases/listAllCars/ListAllCarsController"
import { DeleteCarController } from "../modules/cars/useCases/deleteCar/DeleteCarController";

const carsRoutes = Router();

const addCarController = new AddCarController();

const listAllCarsController = new ListAllCarsController();

const locateCarController = new LocateCarController();

const deleteCarController = new DeleteCarController();

carsRoutes.post("/", addCarController.handle)

carsRoutes.get("/", listAllCarsController.handle)

carsRoutes.get("/:id", locateCarController.handle)

carsRoutes.delete("/:id", deleteCarController.handle)

export { carsRoutes }