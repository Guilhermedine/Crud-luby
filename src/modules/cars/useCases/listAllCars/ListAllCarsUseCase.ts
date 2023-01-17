import { inject, injectable } from "tsyringe";
import { Car } from "../../../../database/models/Car";
import { ICarsRepository } from "../../repositories/ICarsRepository";


@injectable()
class ListAllCarsUseCase {
  constructor(
    @inject("CarsRepository")
    private carsRepository: ICarsRepository) { }

  async execute({ status }): Promise<Car[]> {
    const cars = await this.carsRepository.list({ status });
    return cars
  }
}


export { ListAllCarsUseCase }
