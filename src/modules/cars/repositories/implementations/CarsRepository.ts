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

  async updateCar(car: Car, { solded_by, status, sale_value }: ICarUpdateDTO): Promise<Car> {
    const carUpdated = await car.update({
      solded_by,
      status,
      sale_value
    })

    return carUpdated
  }

  async deleteCar(car: Car) {
    const carDeleted = car.destroy()
    return carDeleted
  }
}


export { CarsRepository }