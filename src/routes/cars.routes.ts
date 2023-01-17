import { Router } from "express";
import { ShowCarController } from "../modules/cars/useCases/showCar/ShowCarController";
import { AddCarController } from "../modules/cars/useCases/addCar/AddCarController";
import { ListAllCarsController } from "../modules/cars/useCases/listAllCars/ListAllCarsController"
import { DeleteCarController } from "../modules/cars/useCases/deleteCar/DeleteCarController";
import { SellCarController } from "../modules/cars/useCases/sellCar/SellCarController"

const carsRoutes = Router();

const addCarController = new AddCarController();

const listAllCarsController = new ListAllCarsController();

const showCarController = new ShowCarController();

const deleteCarController = new DeleteCarController();

const sellCarController = new SellCarController();

carsRoutes.post("/", addCarController.handle)

carsRoutes.get("/", listAllCarsController.handle)

carsRoutes.get("/:id", showCarController.handle)

carsRoutes.delete("/:id", deleteCarController.handle)

carsRoutes.put("/:id", sellCarController.handle)

export { carsRoutes }