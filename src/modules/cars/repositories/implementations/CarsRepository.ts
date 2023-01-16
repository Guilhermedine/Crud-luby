import { ICarDTO } from "modules/cars/dtos/ICarDTO";
import { ICarsRepository } from "../ICarsRepository";
import { Car } from "../../../../database/models/"
import { AppError } from "errors/AppError";


class CarsRepository implements ICarsRepository {

  async create({
    brand,
    model,
    year,
    km,
    color,
    chassis,
    purchase_price,
    status,
  }: ICarDTO): Promise<void> {

    const car = await Car.create({
      brand,
      model,
      year,
      km,
      color,
      chassis,
      purchase_price,
      status,
    });

    await car.save()
  }
  async list(): Promise<Car[]> {
    const all = await Car.findAll()
    return all
  }
}


export { CarsRepository }