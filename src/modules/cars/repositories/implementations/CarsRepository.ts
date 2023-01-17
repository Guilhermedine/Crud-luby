import { Car } from "../../../../database/models/Car";
import { ICarDTO } from "../../dtos/ICarDTO";
import { ICarsRepository } from "../ICarsRepository";




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

  async findByChassi(chassis: string): Promise<Car> {
    const car = await Car.findOne({ where: { chassis } })
    return car
  }
}


export { CarsRepository }