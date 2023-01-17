import { AppError } from "../../../../errors/AppError";
import { Car } from "../../../../database/models/Car";
import { ICarDTO } from "../../dtos/ICarDTO";
import { ICarFiltersDTO } from "../../dtos/ICarFiltersDTO";
import { ICarUpdateDTO } from "../../dtos/ICarUpdateDTO";
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

  async list({ status }: ICarFiltersDTO): Promise<Car[]> {
    const all = await Car.findAll({ where: status ? { status } : null })
    return all
  }

  async findByChassi(chassis: string): Promise<Car> {
    const car = await Car.findOne({ where: { chassis } })
    return car
  }

  async findById(id: string): Promise<Car> {
    const car = await Car.findOne({ where: { id } })
    return car
  }

  async update(car: Car, { solded_by, status, sale_value }: ICarUpdateDTO): Promise<Car> {
    const result = await car.update({
      solded_by,
      status,
      sale_value
    })

    return result
  }
}


export { CarsRepository }